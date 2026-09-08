export const FACULTY_PHOTO_MAP: Record<string, string> = {
  "Dr. Vishal G. Barot": "/vishal-barot.jpg",
  "Prof. Hemalben M. Patel": "/faculty/hemal-patel.jpg",
  "Prof. Shilpa Vasava": "/faculty/shilpa-vasava.jpg",
  "Prof. Vijay Punjabhai Khata": "/faculty/vijay-punjabhai-khata.jpg",
  "Prof. Hinal Prajapati": "/faculty/hinal-prajapati.jpg",
  "Dr. Pina M. Bhatt": "/faculty/pina-m-bhatt.jpeg",
  "Dr. Vivek B. Patel": "/faculty/vivek-b-patel.jpg",
  "Dr. Lav Kumar Kaushik": "/faculty/lav-kumar-kaushik.jpg",
  "Dr. Kapil Surani": "/faculty/kapil-surani.jpg",
  "Prof. Kedar Badheka": "/faculty/kedar-badheka.jpg",
  "Prof. Hitesh Patel": "/faculty/hitesh-patel.png",
  "Prof. Milin Pandya": "/faculty/milin-pandya.jpg",
  "Dr. Arick M. Lakhani": "/faculty/arick-m-lakhani.jpg",
  "Dr. Ankit Modi": "/faculty/ankit-modi.jpg",
  "Prof. Sadanand Sahu": "/faculty/sadanand-sahu.png",
  "Prof. Gaurav J. Vyas": "/faculty/gaurav-j-vyas.png",
  "Prof. Dhaven V. Rughani": "/faculty/dhaven-v-rughani.jpg",
  "Prof. Akshay Rathod": "/faculty/akshay-rathod.png",
  "Prof. Joseph Sebastian Sibi": "/faculty/joseph-sebastian-sibi.png",
  "Dr. Piyush Miyani": "/faculty/piyush-miyani.png",
  "Prof. Vishal Koriya": "/faculty/vishal-koriya.jpg",
  "Dr. Jignesh B. Patel": "/faculty/jignesh-b-patel.jpg",
  "Dr. Maulik Joshi": "/faculty/maulik-joshi.jpg",
  "Dr. Prerak Patel": "/faculty/prerak-patel.png",
  "Prof. Chetna Agarwal": "/faculty/chetna-agarwal.jpg",
  "Prof. Alok Patel": "/faculty/alok-patel.jpg",
  "Prof. Jeel Patel": "/faculty/jeel-patel.jpg",
  "Prof. Harshwardhan R. Chaudhari": "/faculty/harshwardhan-r-chaudhari.jpg",
  "Prof. Naman N. Bhavsar": "/faculty/naman-n-bhavsar.jpg",
  "Prof. Pruthav Barot": "/faculty/pruthav-barot.jpg",
  "Prof. Rajat Dharmeshkumar Priyadarshi": "/faculty/rajat-dharmeshkumar-priyadarshi.jpg",
  "Prof. Pankaj Prajapati": "/faculty/pankaj-prajapati.jpg",
  "Prof. Ashutosh Gohel": "/faculty/ashutosh-gohel.jpg",
  "Dr. Yogeshkumar Khimsuriya": "/faculty/yogeshkumar-khimsuriya.jpg",
  "Prof. Kaushal Khamar": "/faculty/kaushal-khamar.jpeg",
  "Prof. Dharmesh Kiritkumar Patel": "/faculty/dharmesh-kiritkumar-patel.jpg",
  "Mr. ShabbirAli Champa": "/faculty/shabbirali-champa.jpg",
  "Prof. Divyang Pankajbhai Raval": "/faculty/divyang-pankajbhai-raval.jpg",
  "Prof. Jansari Bhargav Dineshkumar": "/faculty/jansari-bhargav-dineshkumar.jpg",
  "Prof. Rajdeepsinh Chavda": "/faculty/rajdeepsinh-chavda.jpg",
  "Mr. MehulKumar Thakor": "/faculty/mehulkumar-thakor.png",
  "Mr. Jay D. Patel": "/faculty/jay-d-patel.jpg",
  "Prof. Mahmmad Azruddin D. Kureshi": "/faculty/mahmmad-azruddin-d-kureshi.jpg",
  "Prof. Shah Divy Balmukund": "/faculty/shah-divy-balmukund.jpg",
  "Ms. Hani Gupta": "/faculty/hani-gupta.png",
};

export function getFacultyPhoto(name: string, explicitImage?: string): string | undefined {
  if (explicitImage) return explicitImage;
  if (FACULTY_PHOTO_MAP[name]) return FACULTY_PHOTO_MAP[name];
  
  // Normalized fallback match
  const clean = name.replace(/(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.)/gi, "").trim().toLowerCase();
  for (const [key, url] of Object.entries(FACULTY_PHOTO_MAP)) {
    const keyClean = key.replace(/(Dr\.|Prof\.|Mr\.|Mrs\.|Ms\.)/gi, "").trim().toLowerCase();
    if (keyClean === clean || keyClean.includes(clean) || clean.includes(keyClean)) {
      return url;
    }
  }
  return undefined;
}
