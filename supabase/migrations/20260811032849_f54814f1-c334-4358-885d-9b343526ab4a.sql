CREATE TYPE public.app_role AS ENUM ('admin','editor','user');

CREATE TABLE public.profiles (
  id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
  email TEXT,
  full_name TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT, UPDATE ON public.profiles TO authenticated;
GRANT ALL ON public.profiles TO service_role;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;

CREATE TABLE public.user_roles (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  user_id UUID NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,
  role public.app_role NOT NULL,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  UNIQUE (user_id, role)
);
GRANT SELECT ON public.user_roles TO authenticated;
GRANT ALL ON public.user_roles TO service_role;
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;

CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role public.app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (SELECT 1 FROM public.user_roles WHERE user_id = _user_id AND role = _role)
$$;

CREATE POLICY "Users read own profile" ON public.profiles FOR SELECT TO authenticated USING (auth.uid() = id OR public.has_role(auth.uid(),'admin'));
CREATE POLICY "Users insert own profile" ON public.profiles FOR INSERT TO authenticated WITH CHECK (auth.uid() = id);
CREATE POLICY "Users update own profile" ON public.profiles FOR UPDATE TO authenticated USING (auth.uid() = id) WITH CHECK (auth.uid() = id);

CREATE POLICY "Users read own roles" ON public.user_roles FOR SELECT TO authenticated USING (auth.uid() = user_id OR public.has_role(auth.uid(),'admin'));

CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER
SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, email, full_name)
  VALUES (NEW.id, NEW.email, NEW.raw_user_meta_data ->> 'full_name')
  ON CONFLICT (id) DO NOTHING;
  RETURN NEW;
END;
$$;

CREATE TRIGGER on_auth_user_created
AFTER INSERT ON auth.users
FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

CREATE OR REPLACE FUNCTION public.set_updated_at()
RETURNS TRIGGER LANGUAGE plpgsql SET search_path = public AS $$
BEGIN NEW.updated_at = now(); RETURN NEW; END; $$;

CREATE TABLE public.banners (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  image_url TEXT NOT NULL,
  caption TEXT,
  link_url TEXT,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.banners TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.banners TO authenticated;
GRANT ALL ON public.banners TO service_role;
ALTER TABLE public.banners ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read published banners" ON public.banners FOR SELECT TO anon, authenticated USING (is_published);
CREATE POLICY "Admins manage banners" ON public.banners FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER banners_updated_at BEFORE UPDATE ON public.banners FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.news (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  title TEXT NOT NULL,
  document_url TEXT,
  published_on DATE NOT NULL DEFAULT CURRENT_DATE,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.news TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.news TO authenticated;
GRANT ALL ON public.news TO service_role;
ALTER TABLE public.news ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read published news" ON public.news FOR SELECT TO anon, authenticated USING (is_published);
CREATE POLICY "Admins manage news" ON public.news FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER news_updated_at BEFORE UPDATE ON public.news FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

CREATE TABLE public.updates (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  text TEXT NOT NULL,
  link_url TEXT,
  starts_on DATE,
  ends_on DATE,
  sort_order INTEGER NOT NULL DEFAULT 0,
  is_published BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT ON public.updates TO anon;
GRANT SELECT, INSERT, UPDATE, DELETE ON public.updates TO authenticated;
GRANT ALL ON public.updates TO service_role;
ALTER TABLE public.updates ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Public read published updates" ON public.updates FOR SELECT TO anon, authenticated USING (is_published);
CREATE POLICY "Admins manage updates" ON public.updates FOR ALL TO authenticated USING (public.has_role(auth.uid(),'admin')) WITH CHECK (public.has_role(auth.uid(),'admin'));
CREATE TRIGGER updates_updated_at BEFORE UPDATE ON public.updates FOR EACH ROW EXECUTE FUNCTION public.set_updated_at();

INSERT INTO public.banners (image_url, caption, sort_order) VALUES
 ('/site/Banner2.png','Admission Open 2026 at GTU-ITR',1),
 ('/site/s1.jpg','GTU-ITR Campus',2),
 ('/site/x2.jpg','Campus Life',3),
 ('/site/x3.jpg','Institute Events',4),
 ('/site/x4.jpg','Student Activities',5),
 ('/site/x5.jpg','Academics at GTU-ITR',6),
 ('/site/x6.jpeg','Achievements',7);

INSERT INTO public.updates (text, link_url, sort_order) VALUES
 ('AI POSTER COMPETITION','https://gtuitr.gtu.ac.in/gperiDoc/AI-Event_Poster%20(1).pdf',1),
 ('MOU signed between GTU and AIA CSR foundation for the establishment of Training centre at GTU-ITR',NULL,2),
 ('GTU-ITR has been awarded with prestigious ISTE-AWARD',NULL,3);

INSERT INTO public.news (title, document_url, sort_order) VALUES
 ('EOI for hiring of stationary on rental basis at GTU-ITR','https://gtuitr.gtu.ac.in/gperiDoc/EOI%20for%20hiring%20of%20stationary%20on%20rental%20basis%20at%20GTU-ITR%20(1).pdf',1),
 ('BE FIRST YEAR Vacant Quota (VQ) Admission Notice for the Academic Year 2026-2027','https://gtuitr.gtu.ac.in/gperiDoc/BE%20FIRST%20YEAR%20VQ%20ADMISSION%20NOTICE%202026%20(2).pdf',2),
 ('Diploma First Year Vacant Quota (VQ) Admission Notice for the Academic Year 2026-27','https://gtuitr.gtu.ac.in/gperiDoc/DIPLOMA%20ADMISSION%20VQ%20NOTICE%20_2026_%20GTU%20-ITR.pdf',3),
 ('First Year Degree Engineering (B.E.) Vacant Quota (VQ) Admission Notice 2025-26','https://gtuitr.gtu.ac.in/gperiDoc/BE%20VQ%20NOTICE%20-2025.pdf',4),
 ('D to D (Second Year Degree) Vacant Quota (VQ) Admission Notice 2025-26','https://gtuitr.gtu.ac.in/gperiDoc/Revised%20D%20to%20D%20VQ%20Notice%20-2025.pdf',5),
 ('MSC-Admission Guidelines','https://gtuitr.gtu.ac.in/gperiDoc/AdmissionGuidelinesforIMSc.IT.pdf',6),
 ('C TO D (Second Year Diploma) Vacant Quota (VQ) Admission Notice 2025-26','https://gtuitr.gtu.ac.in/gperiDoc/C%20TO%20D%20VQ%20NOTICE%202025.pdf',7),
 ('Diploma-to-Degree (D2D) Vacant Quota (VQ) Admission Notice 2026-27','https://gtuitr.gtu.ac.in/gperiDoc/D2d%20Vacant%20Quota%20Admission%20Notice%20for%20AY%202026-27.pdf',8);