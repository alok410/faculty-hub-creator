import type { SiteEvent } from "@/content/events";
import { toast } from "sonner";

export function downloadEventReport(event: SiteEvent) {
  if (typeof window === "undefined") return;

  toast.info(`Generating official report for: ${event.title}`);

  const scheduleRows = (event.schedule || [])
    .map(
      (s) => `<tr>
        <td style="padding: 10px 14px; border: 1px solid #cbd5e1; font-weight: 600; color: #0a3d7a; width: 200px;">${s.time}</td>
        <td style="padding: 10px 14px; border: 1px solid #cbd5e1; color: #334155;">${s.activity}</td>
      </tr>`
    )
    .join("");

  const fullDescParagraphs = (event.fullDescription || [event.description])
    .map((p) => `<p style="line-height: 1.7; margin-bottom: 14px; color: #334155; font-size: 14px; text-align: justify;">${p}</p>`)
    .join("");

  const printWindow = window.open("", "_blank");
  if (!printWindow) {
    toast.error("Please allow popups to download/print the event report PDF");
    return;
  }

  printWindow.document.write(`<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>GTU-ITR Event Report - ${event.title}</title>
  <style>
    * { box-sizing: border-box; }
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
      padding: 40px;
      color: #0f172a;
      max-width: 860px;
      margin: 0 auto;
      background: #ffffff;
    }
    .header {
      border-bottom: 3px solid #b91c1c;
      padding-bottom: 18px;
      margin-bottom: 24px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .inst-name {
      font-size: 20px;
      font-weight: 800;
      color: #0a3d7a;
      text-transform: uppercase;
      margin: 0;
      letter-spacing: 0.5px;
    }
    .inst-sub {
      font-size: 13px;
      color: #475569;
      margin-top: 4px;
      font-weight: 500;
    }
    .report-badge {
      display: inline-block;
      background: #b91c1c;
      color: #ffffff;
      font-size: 10px;
      font-weight: 700;
      padding: 3px 8px;
      text-transform: uppercase;
      letter-spacing: 1px;
      margin-top: 6px;
    }
    .ref-box {
      text-align: right;
      background: #f8fafc;
      padding: 10px 14px;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
    }
    .ref-title {
      font-size: 10px;
      font-weight: 700;
      color: #64748b;
      text-transform: uppercase;
      letter-spacing: 0.5px;
    }
    .ref-val {
      font-size: 12px;
      font-weight: 700;
      color: #0a3d7a;
      margin-top: 2px;
      font-family: monospace;
    }
    .event-tag {
      display: inline-block;
      background: #0a3d7a;
      color: #ffffff;
      font-size: 11px;
      font-weight: 700;
      padding: 4px 10px;
      text-transform: uppercase;
      border-radius: 4px;
      letter-spacing: 0.5px;
      margin-bottom: 10px;
    }
    h1 {
      font-size: 22px;
      color: #0a3d7a;
      margin: 0 0 16px 0;
      text-transform: uppercase;
      line-height: 1.3;
      font-weight: 800;
    }
    .meta-grid {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 12px;
      margin-bottom: 24px;
      background: #f8fafc;
      padding: 16px;
      border: 1px solid #e2e8f0;
      border-radius: 6px;
    }
    .meta-item {
      font-size: 13px;
    }
    .meta-label {
      font-weight: 700;
      color: #64748b;
      text-transform: uppercase;
      font-size: 10px;
      letter-spacing: 0.5px;
    }
    .meta-val {
      font-weight: 600;
      color: #0f172a;
      margin-top: 2px;
    }
    h2 {
      font-size: 14px;
      color: #0a3d7a;
      text-transform: uppercase;
      border-bottom: 2px solid #e2e8f0;
      padding-bottom: 6px;
      margin-top: 28px;
      margin-bottom: 12px;
      font-weight: 800;
      letter-spacing: 0.5px;
    }
    table {
      width: 100%;
      border-collapse: collapse;
      margin-top: 10px;
      font-size: 13px;
    }
    th {
      background: #f1f5f9;
      padding: 10px 14px;
      border: 1px solid #cbd5e1;
      text-align: left;
      font-size: 11px;
      text-transform: uppercase;
      color: #334155;
      font-weight: 700;
    }
    .footer {
      margin-top: 40px;
      border-top: 1px solid #e2e8f0;
      padding-top: 16px;
      font-size: 11px;
      color: #94a3b8;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .action-bar {
      margin-bottom: 24px;
      background: #0a3d7a;
      color: white;
      padding: 12px 18px;
      border-radius: 6px;
      display: flex;
      justify-content: space-between;
      align-items: center;
    }
    .print-btn {
      background: #b91c1c;
      color: white;
      border: none;
      padding: 8px 16px;
      font-size: 12px;
      font-weight: bold;
      text-transform: uppercase;
      border-radius: 4px;
      cursor: pointer;
    }
    @media print {
      body { padding: 10px; }
      .no-print { display: none !important; }
    }
  </style>
</head>
<body>
  <div class="action-bar no-print">
    <div style="font-size: 13px; font-weight: 600;">
      📄 Official Institutional Event Report Preview
    </div>
    <button class="print-btn" onclick="window.print()">
      Download / Save as PDF
    </button>
  </div>

  <div class="header">
    <div>
      <h2 class="inst-name">Gujarat Technological University</h2>
      <div class="inst-sub">Institute of Technology &amp; Research (GTU-ITR), Mehsana</div>
      <span class="report-badge">Official Event Documentation &amp; Outcomes Report</span>
    </div>
    <div class="ref-box">
      <div class="ref-title">Report Reference</div>
      <div class="ref-val">GTU-ITR/EVT/${event.id.toUpperCase().slice(0, 10)}</div>
      <div class="ref-title" style="margin-top: 6px;">Generated On</div>
      <div class="ref-val" style="font-size: 11px;">${new Date().toLocaleDateString("en-IN", { day: "2-digit", month: "short", year: "numeric" })}</div>
    </div>
  </div>

  <span class="event-tag">${event.tag} Category</span>
  <h1>${event.title}</h1>

  <div class="meta-grid">
    <div class="meta-item">
      <div class="meta-label">Event Date</div>
      <div class="meta-val">${event.day} ${event.month} ${event.year || "2026"}</div>
    </div>
    <div class="meta-item">
      <div class="meta-label">Session Timing</div>
      <div class="meta-val">${event.time || "Full Day Scheduled Event"}</div>
    </div>
    <div class="meta-item">
      <div class="meta-label">Venue / Location</div>
      <div class="meta-val">${event.venue || "GTU-ITR Campus, Mehsana"}</div>
    </div>
    <div class="meta-item">
      <div class="meta-label">Organizing Wing</div>
      <div class="meta-val">${event.organizer || "GTU-ITR Academic Mentors & Committee"}</div>
    </div>
    ${
      event.targetAudience
        ? `<div class="meta-item" style="grid-column: span 2;">
            <div class="meta-label">Target Audience & Beneficiaries</div>
            <div class="meta-val">${event.targetAudience}</div>
          </div>`
        : ""
    }
  </div>

  <h2>Event Overview & Objectives</h2>
  ${fullDescParagraphs}

  ${
    scheduleRows
      ? `<h2>Detailed Program Schedule</h2>
         <table>
           <thead>
             <tr>
               <th>Time Interval</th>
               <th>Activity / Session Topic</th>
             </tr>
           </thead>
           <tbody>
             ${scheduleRows}
           </tbody>
         </table>`
      : ""
  }

  ${
    event.contactPerson
      ? `<h2>Event Coordinator & Contact Point</h2>
         <div style="font-size: 13px; line-height: 1.6; margin-top: 8px; background: #f8fafc; padding: 12px; border: 1px solid #e2e8f0; border-radius: 6px;">
           <strong style="color: #0a3d7a;">${event.contactPerson.name}</strong> — ${event.contactPerson.role}<br />
           ${event.contactPerson.email ? `Email: <strong>${event.contactPerson.email}</strong> &bull; ` : ""}
           ${event.contactPerson.phone ? `Phone: <strong>${event.contactPerson.phone}</strong>` : ""}
         </div>`
      : ""
  }

  <div class="footer">
    <div>Gujarat Technological University &bull; Established Under Gujarat Act No. 20 of 2007</div>
    <div>GTU-ITR Mehsana Academic Archive</div>
  </div>

  <script>
    window.onload = function() {
      setTimeout(function() {
        window.print();
      }, 350);
    };
  </script>
</body>
</html>`);

  printWindow.document.close();
}
