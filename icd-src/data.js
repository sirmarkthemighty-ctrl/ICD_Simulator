// Intercostal Drainage (ICD) Simulator — Clinical Data, Physics Presets, Troubleshooting & Bilingual Dictionary

const APP_VERSION = 'v1.6.4';

const CHANGELOG = [
  {
    version: 'v1.6.4',
    date: '2026-11-16',
    en: [
      'Lung redrawn as the anatomical left lung from an anatomy reference: rounded apex, cardiac notch with lingula, single oblique fissure, shaded medial surface and the polygonal lobule pattern of the pleura, in specimen colours.',
    ],
    th: [
      'วาดปอดใหม่เป็นปอดข้างซ้ายตามภาพกายวิภาคอ้างอิง: ปลายปอดโค้งมน รอยบุ๋มหัวใจพร้อมลิงกูลา รอยแยกเฉียงหนึ่งรอย ผิวด้านในเงาเข้ม และลายหลายเหลี่ยมของเยื่อหุ้มปอด ในสีเหมือนชิ้นงานจริง',
    ],
  },
  {
    version: 'v1.6.3',
    date: '2026-11-16',
    en: [
      'More realistic chest panel: one lobed lung with fissures, hilum, bronchi and vessels; a lateral chest wall (skin, muscle, ribs); faint posterior ribs like a radiograph; a domed diaphragm that flattens on inspiration; effusion pooling on the diaphragm with a curved surface.',
    ],
    th: [
      'ภาพช่องอกสมจริงขึ้น: ปอดหนึ่งข้างมีแฉกและรอยแยก ขั้วปอด หลอดลม และหลอดเลือด ผนังทรวงอกด้านข้าง (ผิวหนัง กล้ามเนื้อ ซี่โครง) ซี่โครงด้านหลังจาง ๆ แบบภาพเอกซเรย์ กะบังลมโค้งนูนที่แบนลงเมื่อหายใจเข้า และน้ำในช่องเยื่อหุ้มปอดสะสมบนกะบังลมพร้อมผิวน้ำโค้ง',
    ],
  },
  {
    version: 'v1.6.2',
    date: '2026-11-16',
    en: [
      'Physics audit: suction systems (3-bottle, digital) no longer show an air leak on a sealed, quietly breathing chest. Air now crosses the seal only with a leak fault or positive pleural pressure (cough, Valsalva, ventilator). The Digital Post-Op scenario now reads <30 mL/min as its text states, instead of 324–504 mL/min.',
      'Digital unit: effective suction now shows regardless of the wall-suction setting left over from another system.',
    ],
    th: [
      'ตรวจสอบฟิสิกส์: ระบบที่ใช้แรงดูด (3 ขวด, ดิจิทัล) ไม่แสดงลมรั่วเมื่อช่องอกปิดสนิทและหายใจสงบอีกต่อไป ลมจะผ่าน water seal เฉพาะเมื่อมีจุดรั่วหรือความดันช่องเยื่อหุ้มปอดเป็นบวก (ไอ, เบ่ง, เครื่องช่วยหายใจ) โหมดดิจิทัลหลังผ่าตัดแสดง <30 มล./นาทีตามคำอธิบาย แทนที่จะเป็น 324–504 มล./นาที',
      'เครื่องดิจิทัล: แสดงแรงดูดสุทธิโดยไม่ขึ้นกับค่าแรงดูดผนังที่ค้างจากระบบอื่น',
    ],
  },
  {
    version: 'v1.6.1',
    date: '2026-11-16',
    en: [
      'Fixed dark mode: translucent tinted boxes (e.g. teal/indigo/cyan at 30–90% opacity) were staying pale because their dark-theme CSS rules were malformed and dropped by the browser.',
      'Fixed phone layout: the three view tabs (Visual / Controls / Pressure Math) overflowed a 375 px screen and made the page scroll sideways.',
      'Shortened the clipped "ATM VENT (0)" label in the bottle drawing to "VENT (0)".',
      'Fixed removal readiness: a clamped tube reads 0 mL/min flow and was wrongly shown as "<30 Safe"; readiness now requires an unclamped tube.',
    ],
    th: [
      'แก้โหมดมืด: กล่องสีโปร่งแสง (เช่น teal/indigo/cyan ความทึบ 30–90%) ยังคงซีดเพราะกฎ CSS โหมดมืดเขียนผิดรูปแบบและถูกเบราว์เซอร์ข้ามไป',
      'แก้เลย์เอาต์มือถือ: แท็บ 3 ปุ่ม (Visual / Controls / Pressure Math) ล้นหน้าจอ 375 px ทำให้หน้าเลื่อนไปด้านข้างได้',
      'ย่อป้าย "ATM VENT (0)" ที่ถูกตัดในภาพขวด เป็น "VENT (0)"',
      'แก้ความพร้อมถอดสาย: สายที่ถูกหนีบจะอ่านอัตราไหล 0 มล./นาที และเคยแสดงเป็น "<30 ปลอดภัย" อย่างผิดพลาด ตอนนี้ต้องไม่หนีบสายจึงจะแสดงว่าพร้อม',
    ],
  },
  {
    version: 'v1.6',
    date: '2026-11-14',
    en: [
      'Comprehensive Visual Modernization & Living Anatomy (v1.6): All-in-one overhaul of thoracic anatomy, fluid dynamics, and ICU bedside ergonomics.',
      'Living Lung & Diaphragmatic Mechanics: Real-time dynamic lung expansion and contracting diaphragm dome synchronized with pleural pressure waveform oscillations.',
      'Photorealistic Glass & Dynamic Fluid Surface Sloshing: Cylindrical glass reflections, curved liquid meniscus, wave slosh animation, and calibrated volumetric markings (50–1000 mL).',
      'Dual-Skin Architecture (Classic Glass vs. Commercial Pleur-evac): One-click toggle between classic 3-bottle Emerson lab and commercial all-in-one molded plastic Pleur-evac unit.',
      'Rapid Bedside Clinical Action Deck: Tactile one-click maneuvers (Cough +20, Valsalva +30, Deep Sniff −25, Drain +200 mL, Stepwise Clamp, Milk Tubing).',
      'IntelliVue-Grade Telemetry Cockpit & Visual Alarm Banners: Multi-channel synchronized waveforms with critical visual alarms for Tension Pneumothorax and Re-expansion Pulmonary Edema (RPE).',
      'Interactive Anatomical Hotspots: Pulsing inspect targets on chest wall for Triangle of Safety, Subcostal VAN Bundle, and Catheter Sentinel Eye.',
    ],
    th: [
      'ยกเครื่องทัศนวิสัยและการจำลองกายวิภาคมีชีวิต (v1.6): อัปเกรดความสมจริงของกายวิภาคช่องอก พลศาสตร์ของเหลว และแผงควบคุม ICU ข้างเตียงแบบครบวงจร',
      'ปอดและกะบังลมเคลื่อนไหวตามสรีรวิทยาจริง: กราฟิกปอดขยายตัว-ยุบตัว และกะบังลมดึงลง-ลอยขึ้นตามจังหวะความดันช่องอก P_pl แบบเรียลไทม์',
      'ผิวน้ำกระเพื่อม & ขวดแก้วทรงกระบอกสมจริง: เพิ่มการสะท้อนแสงทรงกระบอก ผิวน้ำโค้งเว้า (Meniscus) ระลอกคลื่นน้ำกระเพื่อม และขีดบอกปริมาตรสารน้ำ 50–1000 มล.',
      'สลับหน้าตาระบบคู่ (ขวดแก้วดั้งเดิม vs กล่องรวม Pleur-evac): ปุ่มสลับมุมมองระหว่างขวดแก้ว Emerson 3 ใบ กับเครื่องระบายแบบกล่องรวม 3 ช่องมาตรฐานโรงพยาบาล',
      'แผงปฏิบัติการด่วนข้างเตียง (Rapid Bedside Action Deck): ปุ่มลัดตรวจผู้ป่วยในคลิกเดียว (ไอแรง +20, เบ่ง Valsalva +30, สูดลึก −25, ระบายเลือด +200 มล., หนีบสาย, รูดสายไล่ลิ่มเลือด)',
      'จอสัญญาณชีพสไตล์ IntelliVue พร้อมแถบเตือนภัยวิกฤต: กราฟคลื่นหลายช่องสัญญาณ พร้อมแถบไฟเตือนสีแดงกะพริบเมื่อเสี่ยง Tension Pneumothorax หรือ RPE',
      'จุดตรวจกายวิภาคแบบโต้ตอบ (Hotspots): จุดสัมผัสเรืองแสงบนผนังอกสำหรับ สามเหลี่ยมความปลอดภัย, หลอดเลือดใต้ซี่โครง (VAN) และรูข้างสาย Sentinel Eye',
    ],
  },
  {
    version: 'v1.5',
    date: '2026-11-14',
    en: [
      'Interactive Biophysical Lab (v1.5): Full transformation of Pressure Equations into an interactive 5-tab laboratory with live calculative simulations.',
      'Hagen-Poiseuille Viscous Resistance & Catheter Sizing (r⁴ Law): Interactive French gauge selector (8–36 Fr) and fluid viscosity picker (air, serous, blood, empyema) demonstrating mathematically why 10 Fr has ~61.5× higher resistance than 28 Fr.',
      'Pleural Elastance (E_el,pl) & P/V Manometry Curve: Real-time pressure-volume curve during fluid evacuation with visual warning when P_pl drops < -20 cmH₂O (Re-expansion Pulmonary Edema risk in trapped lung).',
      'Gravity Siphon Mechanics & Two-Phase Flow: Hydrostatic siphon head calculator showing how air void fraction breaks solid fluid column and collapses siphoning.',
      'Multi-Unit Pressure Transducer & Live Toggle: Real-time conversion across cmH₂O, mmHg, and kPa with wall vacuum gauge miscalibration prevention tool.',
    ],
    th: [
      'ห้องทดลองชีวฟิสิกส์ระบบทางเดินหายใจ (v1.5): ยกเครื่องหน้าต่างสมการความดันเป็นห้องทดลองฟิสิกส์ 5 แท็บแบบโต้ตอบได้พร้อมคำนวณสด',
      'กฎปัวซอยย์และความต้านทานการไหลตามขนาดสาย (กฎ r⁴): เครื่องคำนวณขนาดสาย (8–36 Fr) และความหนืดของเหลว (ลม, น้ำใส, เลือด, หนอง) แสดงให้เห็นชัดเจนว่าสาย 10 Fr มีแรงต้านสูงกว่า 28 Fr ถึง ~61.5 เท่า',
      'ความยืดหยุ่นช่องอก (E_el,pl) & กราฟ Manometry P/V: จำลองการลดลงของความดันช่องอกขณะดูดน้ำ พร้อมแถบเตือนสีแดงเมื่อ P_pl < -20 cmH₂O เสี่ยงปอดบวมน้ำ RPE ในภาวะปอดติดแข็ง',
      'กลไกกาลักน้ำ & การไหล 2 สถานะ (Two-Phase Flow): คำนวณแรงดูดกาลักน้ำจากความต่างระดับเตียง-ขวด และแสดงจุดที่ฟองอากาศตัดขาดลำน้ำทำให้กาลักน้ำยุบตัว',
      'เครื่องแปลงหน่วยความดัน & สลับหน่วยสดข้างเตียง: แปลงหน่วย cmH₂O, mmHg และ kPa แบบเรียลไทม์ พร้อมหน้าปัดเปรียบเทียบเพื่อป้องกันความผิดพลาดในการตั้งแรงดูดที่ผนัง',
    ],
  },
  {
    version: 'v1.4',
    date: '2026-11-14',
    en: [
      'Chemical Pleurodesis & MPE Protocol Hub: Dedicated clinical modal for Malignant Pleural Effusion (MPE), talc slurry preparation, doxycycline, autologous blood patch, and Indwelling Pleural Catheter (IPC) selection.',
      'Evidence-Based Clamping Protocol (BTS 2023 & TIME1): Step-by-step 1-hour dwell clamping guide with patient rotation myth debunked (rotation proven unnecessary in randomized trials).',
      'Talc Slurry vs. IPC Comparative Decision Matrix: Multi-dimensional breakdown of expandable vs trapped lung, hospitalization days, autopleurodesis rates, and patient preferences.',
      'Interactive Clinical Presets: Added 2 new simulated scenarios for Chemical Pleurodesis 1-hr Clamping Dwell and Trapped Lung (MPE high elastance with exaggerated tidaling).',
      'Direct Academic Citations: Integrated JAMA TIME1 trial, JAMA AMPLE trial, and upgraded StatPearls / ATLS links.',
    ],
    th: [
      'ศูนย์แนวทางการทำ Pleurodesis & น้ำในช่องอกมะเร็ง (v1.4): เพิ่มคู่มือและโมดอลสำหรับ Malignant Pleural Effusion (MPE), การผสม Talc slurry, Doxycycline, การฉีดเลือดตนเอง (Blood Patch) และเกณฑ์การเลือกสายระบายค้าง (IPC / PleurX)',
      'ขั้นตอนการหนีบสายตามหลักฐานเชิงประจักษ์ (BTS 2023 & TIME1): แนวทางการหนีบสาย 1 ชม. พร้อมหักล้างความเชื่อเดิมเรื่องการกลิ้งตัวคนไข้ (งานวิจัย TIME1 พิสูจน์แล้วว่าการกลิ้งตัวทุก 15 นาทีไม่มีประโยชน์)',
      'ตารางเปรียบเทียบ Talc Slurry vs สาย IPC: วิเคราะห์ความต่างเรื่องปอดขยาย vs ปอดติดแข็ง (Trapped lung), ระยะเวลานอน รพ., อัตราความสำเร็จ และการดูแลที่บ้าน',
      'สถานการณ์จำลองใหม่ 2 สถานการณ์: เพิ่มสถานการณ์ Pleurodesis ช่วงหนีบยา 1 ชม. และภาวะปอดติดแข็ง (Trapped Lung ความดันลบกว้าง น้ำกระเพื่อมสูงผิดปกติ)',
      'อ้างอิงงานวิจัยระดับสากล: เชื่อมโยงงานวิจัย JAMA TIME1, JAMA AMPLE และคู่มือ BTS 2023',
    ],
  },
  {
    version: 'v1.3',
    date: '2026-11-13',
    en: [
      'All-in-One UI Modernization: Complete hospital-grade interface overhaul with phone-first ergonomics and consolidated clinical action bar.',
      'Mobile View Switcher & Sticky Telemetry HUD: Pinned live vitals monitor allows continuous observation of bottle meniscus and bubbling while adjusting controls on smartphones.',
      'ICU Bedside Telemetry Strip: Real-time patient monitor panel displaying Pleural Pressure, Meniscus Swing, Air Leak Severity, and Chamber Vacuum.',
      'Waveform Freeze & Phase Calipers: Pause live pressure traces to measure peak-to-trough delta (ΔP) with Inspiration (I) and Expiration (E) cycle markers.',
      'Categorized Scenario Hub with Clinical Vignettes: Filterable presets with bedside case vignettes and expected physical findings.',
      'Anatomical Realism & Surface Ripples: Added 4th/5th rib margins, subcostal neurovascular bundle, Triangle of Safety, chest tube sentinel eye, and bubble surface ripples.',
    ],
    th: [
      'ยกเครื่อง UI ครบวงจร (v1.3): ปรับปรุงอินเทอร์เฟซมาตรฐานคลินิก ออกแบบตามหลักสรีรศาสตร์สำหรับมือถือ พร้อมแถบเครื่องมือแพทย์สไตล์ Bedside UI',
      'โหมดสลับมุมมองมือถือ & แถบสรุปสถานะติดตรึง: สรุปสัญญาณชีพสายระบายติดตรึงด้านบน สามารถปรับสไลเดอร์และสังเกตการกระเพื่อมและฟองผุดได้พร้อมกันบนมือถือ',
      'แถบมอนิเตอร์ ICU แสดงสัญญาณชีพสายระบาย: แผงควบคุมสไตล์หน้าจอไอซียู แสดงความดันช่องอก (P_pl), ช่วงกระเพื่อม (Tidaling), ความรุนแรงของลมรั่ว และแรงดูดสุญญากาศ',
      'เครื่องมือหยุดตรวจคลื่นความดัน (Waveform Freeze & Phase Calipers): หยุดภาพเพื่อวัดค่าความต่างความดัน (ΔP) พร้อมมาร์กเกอร์จังหวะหายใจเข้า (I) และออก (E)',
      'ศูนย์รวมสถานการณ์จำลองแยกหมวดพร้อมโจทย์ทางคลินิก: จัดหมวดหมู่สถานการณ์ พร้อมโจทย์เคสจริงและสิ่งที่ควรสังเกตข้างเตียง',
      'ภาพกายวิภาคผนังอกและระลอกคลื่นผิวน้ำ: เพิ่มภาพตัดขวางซี่โครงที่ 4-5, เส้นประสาทและหลอดเลือดใต้ซี่โครง (VAN), สามเหลี่ยมความปลอดภัย, รู Sentinel Eye บนสายระบาย และระลอกคลื่นผิวน้ำเมื่อฟองผุด',
    ],
  },
  {
    version: 'v1.2',
    date: '2026-11-13',
    en: [
      'Mechanical Positive-Pressure Ventilation (PPV) Mode: Simulates ventilator-dependent patients with PEEP and Peak Inspiratory Pressure (PIP).',
      'Inverted Tidaling Physics: Accurately reverses water-seal movement — positive pressure forces water down and triggers bubbling during INSPIRATION, while meniscus rises during expiration.',
      'Ventilator Clinical Presets & Alerts: Added dedicated presets for PPV ventilation and ventilated bronchopleural fistula (BPF) with high-risk warnings against clamping.',
    ],
    th: [
      'โหมดเครื่องช่วยหายใจแรงดันบวก (Mechanical PPV Mode): จำลองสรีรวิทยาผู้ป่วยใส่ท่อช่วยหายใจ พร้อมปรับค่า PEEP และความดันสูงสุดช่วงหายใจเข้า (PIP)',
      'ฟิสิกส์การกระเพื่อมกลับทิศ (Inverted Tidaling): จำลองการเคลื่อนที่ของน้ำที่สลับทิศทางอย่างแม่นยำ — แรงดันบวกจากเครื่องดันน้ำลดลงและฟองอากาศผุดช่วงหายใจเข้า (Inspiration) และน้ำลอยกลับขึ้นช่วงหายใจออก',
      'สถานการณ์จำลองและคำเตือน ICU: เพิ่มปุ่มลัดจำลองโหมดเครื่องช่วยหายใจ และผู้ป่วยลมรั่ว BPF บนเครื่องช่วยหายใจ พร้อมป้ายเตือนอันตรายห้ามหนีบสายเด็ดขาด',
    ],
  },
  {
    version: 'v1.1',
    date: '2026-11-13',
    en: [
      'Procedural Web Audio Engine: Synthesizes Minnaert acoustic bubble chirps, expiratory cough air whoosh, loose tube connector hiss, and wall vacuum drone via native Web Audio API (zero external audio files).',
      'Modern Digital / Dry Suction Drain Unit (e.g. Medela Thopaz / Atrium Oasis): Features mechanical dry suction dial (−10 to −40 cmH₂O), digital numeric air leak flowmeter (mL/min), and ESTS consensus removal criteria badge (< 30 mL/min).',
      'Fluid dynamics & bubble trajectories: Bubbles emerge at the submerged tube tip, curl outward around the tip lip, and rise along the tube flanks to the water surface; removed black bounding box outline on clamp click.',
    ],
    th: [
      'ระบบสังเคราะห์เสียงเชิงกระบวนการ (Web Audio Engine): จำลองเสียงฟองอากาศผุด (Minnaert pitch chirp), เสียงลมไอผ่านช่องอก, เสียงลมรั่วฟ่อจากข้อต่อหลวม และเสียงฮัมเครื่องดูดสุญญากาศ โดยไม่ต้องโหลดไฟล์เสียงภายนอก',
      'ระบบระบายดิจิทัลและปรับแรงดูดแห้ง (Digital / Dry Suction Unit): แป้นบิดแรงดูดแห้ง (−10 ถึง −40 cmH₂O), หน้าจอดิจิทัลวัดอัตราลมรั่วแบบเรียลไทม์ (mL/min) และป้ายแจ้งเกณฑ์พร้อมถอดสายระบายตามมาตรฐานสากล ESTS (< 30 mL/min)',
      'การเคลื่อนที่ของฟองอากาศและส่วนต่อประสาน: ฟองอากาศออกจากปลายท่อโค้งวนขึ้นข้างท่อถึงผิวน้ำอย่างสมจริง พร้อมลบกรอบสีดำรอบแคลมป์เวลาคลิก',
    ],
  },
  {
    version: 'v1.0',
    date: '2026-11-12',
    en: [
      'Initial release following the Bedside UI design language (EN / TH, Light & Dark modes, single offline HTML).',
      'Interactive 1-Bottle, 2-Bottle, and 3-Bottle UWSD physics simulator with adjustable water seal height, collection fluid height, suction column depth, wall vacuum, bottle elevation, and pleural pressure.',
      'Real-time animated SVG diagram with tidaling meniscus, intermittent vs. continuous bubbling, and interactive Stepwise Clamp Test for localizing tube leaks.',
      'Clinical indications for each system, searchable troubleshooting cards with one-click simulation, clamping/removal safety guide, and verified source citations.',
    ],
    th: [
      'เปิดตัวเวอร์ชันแรกตามมาตรฐาน Bedside UI (สองภาษา ไทย/อังกฤษ, โหมดสว่าง/มืด, ไฟล์ HTML เดี่ยวใช้งานออฟไลน์ได้)',
      'เครื่องจำลองฟิสิกส์ระบบระบาย 1 ขวด, 2 ขวด และ 3 ขวด ปรับความลึก water seal ระดับน้ำที่ระบายได้ ระดับน้ำคุมแรงดูด แรงดูดผนัง ความสูงขวด และความดันช่องเยื่อหุ้มปอดได้แบบเรียลไทม์',
      'ภาพ SVG เคลื่อนไหวแสดงระดับน้ำกระเพื่อม (tidaling) ฟองอากาศ และปุ่มทดสอบ Clamp Test ทีละขั้นเพื่อแยกตำแหน่งท่อรั่ว',
      'รวบรวมข้อบ่งชี้ของแต่ละระบบ การ์ดแก้ปัญหาเฉพาะหน้าพร้อมปุ่มจำลองเหตุการณ์ทันที เกณฑ์การหนีบ/ถอดสาย และแหล่งอ้างอิงที่ตรวจสอบแล้ว',
    ],
  },
];

// Verified clinical references
const REFERENCES = [
  {
    key: 'light_manometry',
    cite: 'Light RW, Jenkinson SG, Minh VD. Observations on pleural fluid pressures as fluid is withdrawn during thoracentesis. Am Rev Respir Dis. 1980;121(5):799-804.',
    url: 'https://doi.org/10.1164/arrd.1980.121.5.799',
  },
  {
    key: 'poiseuille_ref',
    cite: 'Poiseuille JLM. Recherches expérimentales sur le mouvement des liquides dans les tubes de très-petits diamètres. C R Acad Sci. 1840;11:961-967.',
    url: 'https://gallica.bnf.fr/ark:/12148/bpt6k2968p/f965.item',
  },
  {
    key: 'time1_trial',
    cite: 'Rahman NM, et al. Effect of Opioids vs NSAIDs and Larger vs Smaller Chest Tube Size on Pain and Pleurodesis Efficacy in Patients with Malignant Pleural Effusion (TIME1 Trial). JAMA. 2015;314(24):2641-2653.',
    url: 'https://doi.org/10.1001/jama.2015.16840',
  },
  {
    key: 'ample_trial',
    cite: 'Thomas R, et al. Effect of an Indwelling Pleural Catheter vs Talc Pleurodesis on Hospitalisation Days in Patients With Malignant Pleural Effusion (AMPLE). JAMA. 2017;318(19):1903-1912.',
    url: 'https://doi.org/10.1001/jama.2017.17426',
  },
  {
    key: 'bts_guideline',
    cite: 'Roberts ME, Rahman NM, Maskell NA, et al. British Thoracic Society Guideline for pleural disease. Thorax. 2023;78(Suppl 3):s1-s42.',
    url: 'https://doi.org/10.1136/thorax-2022-219784',
  },
  {
    key: 'bts_statement',
    cite: 'Asciak R, Bedawi EO, Bhatnagar R, et al. British Thoracic Society Clinical Statement on pleural procedures. Thorax. 2023;78(Suppl 3):s43-s68.',
    url: 'https://doi.org/10.1136/thorax-2022-219371',
  },
  {
    key: 'zisis',
    cite: 'Zisis C, Tsirgogianni K, Lazaridis G, et al. Chest drainage systems in use. Ann Transl Med. 2015;3(3):43.',
    url: 'https://doi.org/10.3978/j.issn.2305-5839.2015.02.09',
  },
  {
    key: 'statpearls',
    cite: 'Ravi C, McKnight CL. Care of a Chest Tube; Anderson D, Chen SA, et al. Tube Thoracostomy Management. StatPearls [Internet]. NCBI Bookshelf.',
    url: 'https://www.ncbi.nlm.nih.gov/books/NBK537233/',
  },
  {
    key: 'atls',
    cite: 'American College of Surgeons Committee on Trauma. Advanced Trauma Life Support (ATLS) Student Course Manual, 10th ed. Thoracic Trauma. Chicago: ACS; 2018.',
    url: 'https://www.facs.org/quality-programs/trauma/education/advanced-trauma-life-support/',
  },
  {
    key: 'ests_digital',
    cite: 'Brunelli A, Cassivi SD, Salati M, et al. Digital measurements of air leak flow and degree of variation: an international multicentre study. Eur J Cardiothorac Surg. 2011;40(1):e27-e32.',
    url: 'https://doi.org/10.1016/j.ejcts.2010.10.021',
  },
];

const REF_GROUPS = [
  {
    id: 'guidelines',
    en: 'Clinical Guidelines & Procedural Statements',
    th: 'แนวทางเวชปฏิบัติและมาตรฐานหัตถการ',
    keys: ['bts_guideline', 'bts_statement', 'atls', 'ests_digital'],
  },
  {
    id: 'physics',
    en: 'Drainage Physics & Bedside Care',
    th: 'หลักฟิสิกส์และการดูแลสายระบายข้างเตียง',
    keys: ['zisis', 'statpearls'],
  },
];

// Meaning colours (one colour, one meaning — Bedside UI)
const SYSTEM_TONE = {
  '1b': {
    badge: 'bg-sky-50 border-sky-200 text-sky-700',
    solid: 'bg-indigo-600 text-white border-indigo-600 shadow-sm',
    ring: 'border-sky-300',
    accentText: 'text-sky-700',
  },
  '2b': {
    badge: 'bg-emerald-50 border-emerald-200 text-emerald-700',
    solid: 'bg-indigo-600 text-white border-indigo-600 shadow-sm',
    ring: 'border-emerald-300',
    accentText: 'text-emerald-700',
  },
  '3b': {
    badge: 'bg-purple-50 border-purple-200 text-purple-700',
    solid: 'bg-indigo-600 text-white border-indigo-600 shadow-sm',
    ring: 'border-purple-300',
    accentText: 'text-purple-700',
  },
  'dry': {
    badge: 'bg-teal-50 border-teal-200 text-teal-700',
    solid: 'bg-indigo-600 text-white border-indigo-600 shadow-sm',
    ring: 'border-teal-300',
    accentText: 'text-teal-700',
  },
};

const SEVERITY_TONE = {
  info: 'bg-sky-50 border-sky-200 text-sky-700',
  caution: 'bg-amber-50 border-amber-200 text-amber-800',
  critical: 'bg-rose-50 border-rose-200 text-rose-700',
};

// Static class lookup so Tailwind JIT always emits every variant and dark-theme-layer covers them cleanly
const PRESET_TONE = {
  emerald: 'bg-emerald-50 border-emerald-200 text-emerald-700 hover:bg-emerald-100',
  sky: 'bg-sky-50 border-sky-200 text-sky-700 hover:bg-sky-100',
  amber: 'bg-amber-50 border-amber-200 text-amber-700 hover:bg-amber-100',
  orange: 'bg-orange-50 border-orange-200 text-orange-700 hover:bg-orange-100',
  rose: 'bg-rose-50 border-rose-200 text-rose-700 hover:bg-rose-100',
  teal: 'bg-teal-50 border-teal-200 text-teal-700 hover:bg-teal-100',
  indigo: 'bg-indigo-50 border-indigo-200 text-indigo-700 hover:bg-indigo-100',
};

// Three ICD Bottle Systems: specs, indications, limitations, physics, sources
const SYSTEM_SPECS = [
  {
    id: '1b',
    bottles: 1,
    en: {
      name: 'One-Bottle System',
      short: '1-Bottle',
      subtitle: 'Combined Collection + Water-Seal Chamber',
      mechanism: 'A single glass bottle serves as both the drainage collection reservoir and the underwater one-way valve. The patient tube is submerged 2 cm below sterile water while a short vent opens to atmospheric air (0 cmH₂O).',
      pressureSpec: 'Gravity drainage; initial cracking pressure +2 cmH₂O (rises as fluid accumulates)',
      indications: [
        'Simple, uncomplicated pneumothorax (small-to-moderate air leak, minimal fluid output).',
        'Small serous pleural effusion where large ongoing fluid drainage is not anticipated.',
        'Resource-limited or patient transport settings needing a compact gravity seal.',
      ],
      limitations: [
        'As fluid/blood drains into the bottle, total liquid height increases (h_eff = h_seal + Δh_fluid), raising expiratory resistance and impairing air/fluid evacuation.',
        'Not suited for massive hemothorax, large pleural effusion, or persistent high-volume air leaks.',
        'Cannot connect regulated wall suction directly without adding a suction control chamber.',
      ],
      keyFormula: 'P_crack = 0 + (h_seal + Δh_fluid)',
      pearl: 'Watch the fluid mark! Every +1 cm rise in collected fluid adds +1 cmH₂O back-pressure that the patient must overcome to expel air.',
    },
    th: {
      name: 'ระบบ 1 ขวด (One-Bottle System)',
      short: '1 ขวด',
      subtitle: 'รวมขวดเก็บสารน้ำและขวด Water Seal ในขวดเดียว',
      mechanism: 'ใช้ขวดใบเดียวทำหน้าที่ทั้งรองรับสารน้ำ/เลือดที่ระบายออกมา และเป็นลิ้นทางเดียว (underwater seal) โดยจุ่มปลายท่อจากผู้ป่วยลึก 2 ซม. ใต้ระดับน้ำปลอดเชื้อ และเปิดรูระบายอากาศสู่บรรยากาศ (0 cmH₂O)',
      pressureSpec: 'ระบายตามแรงโน้มถ่วง; แรงต้านเริ่มต้น +2 cmH₂O (เพิ่มขึ้นตามระดับสารน้ำที่สะสม)',
      indications: [
        'ภาวะลมรั่วในช่องเยื่อหุ้มปอดชนิดไม่ซับซ้อน (simple pneumothorax) ที่คาดว่าไม่มีสารน้ำ/เลือดออกมาก',
        'ภาวะน้ำในช่องเยื่อหุ้มปอดปริมาณน้อย ที่ไม่คาดว่าจะมีการระบายต่อเนื่องปริมาณมาก',
        'การเคลื่อนย้ายผู้ป่วยหรือสถานที่ที่อุปกรณ์จำกัดและเพียงพอต่อการระบายด้วยแรงโน้มถ่วง',
      ],
      limitations: [
        'เมื่อเลือดหรือสารน้ำไหลลงขวด ระดับน้ำจะสูงขึ้น ทำให้ความลึกปลายท่อเพิ่มขึ้น (h_eff = h_seal + Δh_fluid) เพิ่มแรงต้านขณะหายใจออกและลดประสิทธิภาพการระบาย',
        'ไม่เหมาะกับ hemothorax ปริมาณมาก น้ำในช่องปอดปริมาณมาก หรือลมรั่วรุนแรงต่อเนื่อง',
        'ไม่สามารถต่อเครื่องดูดสุญญากาศจากผนังโดยตรงได้หากไม่มีขวดควบคุมแรงดูด',
      ],
      keyFormula: 'P_crack = 0 + (h_seal + Δh_fluid)',
      pearl: 'ระวังระดับน้ำขึ้น! ทุกๆ 1 ซม. ของสารน้ำที่เพิ่มขึ้นในขวด จะเพิ่มแรงต้านอีก +1 cmH₂O ที่ปอดต้องออกแรงดันลมออก',
    },
    sources: [
      { key: 'zisis', label: 'Zisis 2015' },
      { key: 'bts_statement', label: 'BTS 2023' },
      { key: 'statpearls', label: 'StatPearls' },
    ],
  },
  {
    id: '2b',
    bottles: 2,
    en: {
      name: 'Two-Bottle System',
      short: '2-Bottle',
      subtitle: 'Dedicated Collection Bottle + Independent Water-Seal Bottle',
      mechanism: 'Bottle 1 traps all drained blood, pus, or pleural fluid before air continues via a short connecting tube into Bottle 2 (Water Seal submerged 2 cm, vented to atmosphere at 0 cmH₂O).',
      pressureSpec: 'Gravity drainage; constant cracking pressure +2 cmH₂O regardless of Bottle 1 fluid volume',
      indications: [
        'Moderate-to-large pleural effusion, hemothorax, empyema, or chylothorax managed without active suction.',
        'Pneumothorax accompanied by significant fluid or bloody drainage.',
        'Post-thoracic surgery patients stable on gravity water-seal drainage (e.g., weaning off suction prior to removal).',
      ],
      limitations: [
        'Relies strictly on gravity and positive expiratory pleural pressure (no active negative suction).',
        'May be insufficient for large persistent bronchopleural air leaks or non-expanding lung.',
      ],
      keyFormula: 'P_crack = 0 + h_seal  (independent of Bottle 1 Δh_fluid)',
      pearl: 'Clinical advantage: Bottle 1 isolates fluid volume, keeping Bottle 2 water seal fixed at 2 cm so expiratory resistance never climbs.',
    },
    th: {
      name: 'ระบบ 2 ขวด (Two-Bottle System)',
      short: '2 ขวด',
      subtitle: 'แยกขวดรับสารน้ำ (Bottle 1) ออกจากขวด Water Seal (Bottle 2)',
      mechanism: 'ขวดที่ 1 ดักรับเลือด หนอง หรือสารน้ำจากช่องเยื่อหุ้มปอด ส่วนลมจะผ่านท่อเชื่อมต่อไปยังขวดที่ 2 ซึ่งเป็นขวด Water Seal (จุ่มลึกคงที่ 2 ซม. และเปิดสู่บรรยากาศ 0 cmH₂O)',
      pressureSpec: 'ระบายตามแรงโน้มถ่วง; แรงต้านคงที่ +2 cmH₂O ไม่แปรผันตามปริมาณสารน้ำในขวดที่ 1',
      indications: [
        'ภาวะน้ำในช่องเยื่อหุ้มปอด เลือดออกในช่องอก (hemothorax) หนอง (empyema) หรือน้ำเหลือง (chylothorax) ปริมาณปานกลางถึงมากที่ไม่ต้องใช้แรงดูด',
        'ภาวะลมรั่วในช่องปอดที่พบร่วมกับสารน้ำหรือเลือดออกปริมาณมาก',
        'ผู้ป่วยหลังผ่าตัดทรวงอกที่อาการคงที่และใช้ระบบแรงโน้มถ่วง (หรือช่วงลดระดับจากการใช้แรงดูดก่อนถอดสาย)',
      ],
      limitations: [
        'อาศัยแรงโน้มถ่วงและแรงดันบวกขณะหายใจออก/ไอเท่านั้น ไม่มีแรงดูดลบช่วยดึง',
        'อาจไม่เพียงพอในผู้ป่วยที่มีลมรั่วปริมาณมากต่อเนื่อง หรือปอดยังขยายตัวไม่เต็มที่',
      ],
      keyFormula: 'P_crack = 0 + h_seal  (ไม่ขึ้นกับระดับสารน้ำ Δh_fluid ในขวดที่ 1)',
      pearl: 'ข้อดีสำคัญ: ขวดที่ 1 แยกสารน้ำออกต่างหาก ทำให้ระดับน้ำในขวดที่ 2 คงที่ 2 ซม. เสมอ แรงต้านในการระบายจึงไม่เพิ่มขึ้น',
    },
    sources: [
      { key: 'zisis', label: 'Zisis 2015' },
      { key: 'statpearls', label: 'StatPearls' },
      { key: 'bts_statement', label: 'BTS 2023' },
    ],
  },
  {
    id: '3b',
    bottles: 3,
    en: {
      name: 'Three-Bottle System',
      short: '3-Bottle',
      subtitle: 'Collection + Water-Seal + Wet Suction Control Bottle',
      mechanism: 'Adds Bottle 3 (Suction Control) downstream of the Water Seal. An atmospheric vent tube in Bottle 3 is submerged to depth h_suction (standard 20 cm). Wall vacuum draws air through this vent, clamping chamber pressure at −h_suction regardless of higher wall vacuum.',
      pressureSpec: 'Regulated active suction: −15 to −20 cmH₂O (Adult); −10 to −15 cmH₂O (Pediatric). Net pleural suction ≈ −(h_suction − h_seal) = −18 cmH₂O.',
      indications: [
        'Persistent or large air leak (bronchopleural fistula, bullous lung disease, pneumothorax on positive-pressure mechanical ventilation).',
        'Incomplete lung re-expansion despite 1- or 2-bottle gravity drainage.',
        'Large or rapid hemothorax, empyema, or post-thoracotomy/lobectomy requiring continuous regulated negative suction.',
      ],
      limitations: [
        'Turning wall suction OFF without disconnecting Bottle 3 tubing seals the vent and risks tension pneumothorax.',
        'Excessive wall vacuum causes rapid water evaporation in Bottle 3 (slowly lowering h_suction) without increasing patient suction.',
        'Requires careful suction level titration in pneumonectomy (usually avoided/special balanced drainage) or fragile lung.',
      ],
      keyFormula: 'P_overhead = −min(|P_wall|, h_suction);  P_net = −(h_suction − h_seal)',
      pearl: 'Wall vacuum strength does NOT set suction pressure — the submerged depth (cm) of the atmospheric vent tube in Bottle 3 does!',
    },
    th: {
      name: 'ระบบ 3 ขวด (Three-Bottle System)',
      short: '3 ขวด',
      subtitle: 'ขวดเก็บสารน้ำ + ขวด Water Seal + ขวดควบคุมแรงดูด (Suction Control)',
      mechanism: 'เพิ่มขวดที่ 3 ต่อจากขวด Water Seal โดยมีท่อเปิดสู่บรรยากาศจุ่มน้ำลึก h_suction (มาตรฐาน 20 ซม.) แรงดูดจากผนังจะดึงอากาศผ่านท่อนี้เมื่อแรงดูดเกินค่าที่ตั้งไว้ ทำให้แรงดันลบถูกจำกัดคงที่ที่ −h_suction เสมอ',
      pressureSpec: 'แรงดูดลบที่ควบคุมได้: ผู้ใหญ่ −15 ถึง −20 cmH₂O (เด็ก −10 ถึง −15 cmH₂O) แรงดูดสุทธิหลังหัก water seal 2 ซม. = −18 cmH₂O',
      indications: [
        'ลมรั่วปริมาณมากหรือต่อเนื่อง (เช่น bronchopleural fistula, ถุงลมโป่งพองแตก, หรือผู้ป่วยใช้เครื่องช่วยหายใจแรงดันบวก)',
        'ปอดขยายตัวไม่เต็มที่แม้ระบายด้วยระบบ 1 หรือ 2 ขวดแล้ว',
        'เลือดออกมากในช่องอก (hemothorax), หนอง (empyema) หรือหลังผ่าตัดทรวงอก/ตัดกลีบปอดที่ต้องการแรงดูดลบสม่ำเสมอ',
      ],
      limitations: [
        'ห้ามปิดสวิตช์แรงดูดผนังโดยไม่ถอดสายออกจากขวดที่ 3 เพราะจะทำให้ระบบปิดตันและเกิด tension pneumothorax ได้',
        'เปิดแรงดูดผนังแรงเกินไปไม่ได้เพิ่มแรงดูดที่ปอด แต่ทำให้น้ำในขวดที่ 3 ระเหยเร็ว (ลดความลึก h_suction ลง)',
        'ต้องระมัดระวังเป็นพิเศษในผู้ป่วยหลังตัดปอดทั้งข้าง (pneumonectomy) ซึ่งมักหลีกเลี่ยงการใช้ suction',
      ],
      keyFormula: 'P_overhead = −min(|P_wall|, h_suction);  P_net = −(h_suction − h_seal)',
      pearl: 'ความแรงที่ปุ่ม wall suction ไม่ใช่ตัวกำหนดแรงดูดที่ปอด — ความลึก (ซม.) ของท่อระบายอากาศในขวดที่ 3 ต่างหากที่เป็นตัวคุมความดัน!',
    },
    sources: [
      { key: 'zisis', label: 'Zisis 2015' },
      { key: 'bts_guideline', label: 'BTS 2023' },
      { key: 'statpearls', label: 'StatPearls' },
    ],
  },
  {
    id: 'dry',
    bottles: 0,
    en: {
      name: 'Digital / Dry-Suction Unit',
      short: 'Digital Unit',
      subtitle: 'Modern Portable Electronic Drain & Dry Regulator (e.g. Medela Thopaz / Atrium Oasis)',
      mechanism: 'Consolidates an internal triple-column collection canister, a precision mechanical dry suction regulator (or battery-powered digital micropump), and an electronic mass-flow air leak sensor into an all-in-one lightweight bedside unit.',
      pressureSpec: 'Regulated Dry Suction −10 to −40 cmH₂O; Precise electronic Air Leak Sensor (mL/min)',
      indications: [
        'Post-thoracotomy, lobectomy, and segmentectomy requiring objective air leak quantification.',
        'Active, persistent broncho-pleural fistula (BPF) needing continuous numeric leak tracking (mL/min) to determine healing trajectory.',
        'Early enhanced recovery (ERAS) patient ambulation protocols without tethering to stationary wall vacuum.',
      ],
      limitations: [
        'Higher disposable canister cost compared to classic reusable glass bottles.',
        'Requires lithium battery charging and digital sensor zeroing.',
        'Must not clamp tubing during routine ambulation unless specifically testing for broncho-pleural leak localization.',
      ],
      keyFormula: 'Suction = Dial Setting (zero water evaporation); Air Leak = Q_leak (mL/min)',
      pearl: 'ESTS Guideline: Digital air leak < 30 mL/min for 6–12 consecutive hours without spikes on coughing predicts safe chest tube removal with zero recurrent pneumothorax.',
    },
    th: {
      name: 'ระบบดิจิทัล / ปรับแรงดูดแห้ง (Digital / Dry Suction Unit)',
      short: 'ดิจิทัล (Dry/Digital)',
      subtitle: 'เครื่องระบายแบบพกพาระบบดิจิทัลและตัวปรับแรงดูดแห้ง (เช่น Medela Thopaz / Atrium Oasis)',
      mechanism: 'รวมช่องเก็บสารน้ำ 3 ช่อง ตัวควบคุมแรงดูดแบบสปริงแห้ง (Dry Suction Regulator) หรือไมโครปั๊มอิเล็กทรอนิกส์ และเซนเซอร์วัดอัตราการรั่วของลมแบบเรียลไทม์ (mL/min) ไว้ในเครื่องกะทัดรัดเครื่องเดียว',
      pressureSpec: 'ปรับแรงดูดแห้ง −10 ถึง −40 cmH₂O; หน้าจอแสดงอัตราลมรั่วแบบตัวเลข (mL/min)',
      indications: [
        'หลังผ่าตัดเปิดทรวงอก ผ่าตัดตัดกลีบปอด (Lobectomy) ที่ต้องการตรวจวัดการรั่วของลมอย่างแม่นยำ',
        'ภาวะลมรั่วต่อเนื่องจากปอด (BPF) ที่ต้องการข้อมูลเชิงปริมาณเพื่อติดตามการหายและวางแผนถอดสาย',
        'โปรแกรมฟื้นฟูหลังผ่าตัดระยะเร็ว (ERAS) ที่ผู้ป่วยต้องลุกเดินเร็วโดยไม่ต้องต่อท่อกับแรงดูดผนังห้องตลอดเวลา',
      ],
      limitations: [
        'ค่าใช้จ่ายกระบอกเก็บน้ำ (canister) แบบใช้แล้วทิ้งสูงกว่าขวดแก้วธรรมดา',
        'ต้องชาร์จแบตเตอรี่และระวังเซนเซอร์เปียกน้ำหากคว่ำกระบอก',
        'ห้ามหนีบสายระหว่างการเดินของผู้ป่วย ยกเว้นการทดสอบแยกรอยรั่วชั่วคราว',
      ],
      keyFormula: 'P_suction = ค่าที่ตั้งบนแป้นบิด (น้ำไม่ระเหย); อัตราลมรั่ว = Q_leak (mL/min)',
      pearl: 'ตามแนวทาง ESTS: หากอัตราลมรั่ว < 30 mL/min ติดต่อกัน 6–12 ชม. โดยไม่พุ่งสูงขึ้นเวลาไอ แสดงว่าเนื้อปอดปิดสนิท สามารถถอดสายระบายได้อย่างปลอดภัย',
    },
    sources: [
      { key: 'ests_digital', label: 'ESTS / Brunelli 2011' },
      { key: 'bts_statement', label: 'BTS 2023' },
      { key: 'statpearls', label: 'StatPearls' },
    ],
  },
];

// Interactive Simulator Presets
const SCENARIO_PRESETS = [
  {
    id: 'normal',
    cat: 'physio',
    tone: 'emerald',
    en: 'Normal Breathing',
    th: 'หายใจปกติ',
    vignette: {
      en: 'Spontaneous breathing at rest. Pleural pressure swings between −9 and −4 cmH₂O.',
      th: 'ผู้ป่วยหายใจเองขณะพัก ความดันช่องเยื่อหุ้มปอดแกว่งระหว่าง −9 ถึง −4 cmH₂O',
    },
    expected: {
      en: 'Meniscus tidals gently upward during inspiration. No bubbling.',
      th: 'ระดับน้ำแกว่งขึ้นตามจังหวะหายใจเข้า ไม่มีฟองอากาศผุด',
    },
    apply: { hSeal: 2.0, hFluid: 0.0, hSuction: 20, wallSuctionMode: 'standard', bottleHeightCm: -60, fault: 'none', breathingOn: true, pExp: -4, pInsp: -9 },
  },
  {
    id: 'cough',
    cat: 'physio',
    tone: 'sky',
    en: 'Cough / Expiratory Air',
    th: 'ไอ / ระบายลม',
    vignette: {
      en: 'Patient produces a vigorous expiratory cough (+18 to +20 cmH₂O pleural spike).',
      th: 'ผู้ป่วยไอแรง ความดันช่องอกพุ่งสูงชั่วขณะ (+18 ถึง +20 cmH₂O)',
    },
    expected: {
      en: 'Cracking pressure (+2 cmH₂O) easily exceeded; robust burst of air bubbles evacuates.',
      th: 'ความดันชนะแรงต้าน (+2 cmH₂O) ฟองอากาศพุ่งระบายออกทาง Water Seal',
    },
    apply: { hSeal: 2.0, hFluid: 0.0, hSuction: 20, wallSuctionMode: 'standard', bottleHeightCm: -60, fault: 'none', breathingOn: false, pStatic: 18 },
  },
  {
    id: 'vent_ppv',
    cat: 'vent',
    tone: 'indigo',
    en: 'Ventilator: PPV (Inverted Tidaling)',
    th: 'เครื่องช่วยหายใจ: PPV (กระเพื่อมกลับทิศ)',
    vignette: {
      en: 'Intubated patient on volume-control mechanical ventilation (PIP +14, PEEP +3 cmH₂O).',
      th: 'ผู้ป่วยใส่ท่อช่วยหายใจ ควบคุมด้วยเครื่องช่วยหายใจ (PIP +14, PEEP +3 cmH₂O)',
    },
    expected: {
      en: 'Inverted tidaling: positive inspiratory pressure forces water down; exhalation allows meniscus to rise.',
      th: 'การกระเพื่อมสลับทิศ: แรงดันบวกดันน้ำลดต่ำลงช่วงหายใจเข้า และลอยกลับขึ้นช่วงหายใจออก',
    },
    apply: { ventMode: 'mechanical', breathingOn: true, pExp: 3, pInsp: 14, hSeal: 2.0, hFluid: 1.0, hSuction: 20, wallSuctionMode: 'standard', bottleHeightCm: -60, fault: 'none' },
  },
  {
    id: 'vent_bpf',
    cat: 'vent',
    tone: 'rose',
    en: 'Ventilator: Large BPF (Insp Bubbling)',
    th: 'เครื่องช่วยหายใจ + BPF (ฟองผุดตอนเข้า)',
    vignette: {
      en: 'Ventilated patient with severe necrotizing pneumonia and bronchopleural fistula.',
      th: 'ผู้ป่วยบนเครื่องช่วยหายใจที่มีภาวะปอดอักเสบเนื้อตายและเกิดรูรั่วหลอดลม-ช่องเยื่อหุ้มปอด (BPF)',
    },
    expected: {
      en: 'Vigorous bubbling during INSPIRATION. NEVER clamp this tube (rapid tension pneumothorax risk).',
      th: 'ฟองอากาศผุดรุนแรงช่วงหายใจเข้า ห้ามหนีบสายเด็ดขาดเพราะเสี่ยงเกิด Tension Pneumothorax ทันที',
    },
    apply: { system: '3b', ventMode: 'mechanical', breathingOn: true, pExp: 4, pInsp: 16, hSeal: 2.0, hFluid: 1.5, hSuction: 20, wallSuctionMode: 'standard', bottleHeightCm: -60, fault: 'air_leak_bpf' },
  },
  {
    id: 'tube_leak',
    cat: 'leaks',
    tone: 'rose',
    en: 'Tube Leak (Loose Connector)',
    th: 'ท่อรั่ว (ข้อต่อหลวม)',
    vignette: {
      en: 'Nurse notices persistent continuous bubbling. Loose tubing connector suspected outside chest.',
      th: 'พยาบาลพบฟองผุดต่อเนื่องตลอดเวลา สงสัยข้อต่อภายนอกหลวมดูดลมห้องเข้ามา',
    },
    expected: {
      en: 'Continuous bubbling. Clamp at chest: bubbling CONTINUES (proves external circuit leak).',
      th: 'ฟองผุดต่อเนื่อง; เมื่อหนีบสายชิดหน้าอก ฟองยังคงผุดต่อเนื่อง (แสดงว่ารั่วภายนอก)',
    },
    apply: { system: '2b', hSeal: 2.0, hFluid: 1.5, hSuction: 20, wallSuctionMode: 'standard', bottleHeightCm: -60, fault: 'tube_leak', breathingOn: true, pExp: -4, pInsp: -9 },
  },
  {
    id: 'air_leak_bpf',
    cat: 'leaks',
    tone: 'orange',
    en: 'Patient Air Leak (BPF)',
    th: 'ลมรั่วจากปอด (BPF)',
    vignette: {
      en: 'Post-lobectomy day 2 with suspected visceral pleural tear / bronchopleural fistula.',
      th: 'หลังผ่าตัดตัดกลีบปอดวันที่ 2 สงสัยผิวปอดฉีกขาดหรือมีรูรั่วจากหลอดลม',
    },
    expected: {
      en: 'Expiratory or continuous bubbling. Clamp at chest: bubbling STOPS immediately (proves lung leak).',
      th: 'ฟองผุดช่วงหายใจออก; เมื่อหนีบสายชิดหน้าอก ฟองหยุดทันที (แสดงว่าลมรั่วมาจากปอด)',
    },
    apply: { system: '3b', hSeal: 2.0, hFluid: 1.0, hSuction: 20, wallSuctionMode: 'standard', bottleHeightCm: -60, fault: 'air_leak_bpf', breathingOn: true, pExp: -2, pInsp: -7 },
  },
  {
    id: 'kink_clot',
    cat: 'hazards',
    tone: 'rose',
    en: 'Clot / Kink (No Tidaling)',
    th: 'ท่อตัน/พับ (ไม่กระเพื่อม)',
    vignette: {
      en: 'Chest tube obstructed by thick fibrinous clot or tight mechanical kink under bed sheets.',
      th: 'สายระบายอุดตันจากลิ่มเลือด/ไฟบรินหนา หรือสายพับงอใต้ผ้าปูเตียง',
    },
    expected: {
      en: 'Tidaling is completely ABSENT (0 cm). No air or fluid drainage.',
      th: 'ระดับน้ำนิ่งสนิท ไม่มีการกระเพื่อม (Tidaling = 0 ซม.) ไม่มีลมหรือของเหลวระบาย',
    },
    apply: { hSeal: 2.0, hFluid: 2.0, hSuction: 20, wallSuctionMode: 'standard', bottleHeightCm: -60, fault: 'kink_clot', breathingOn: true, pExp: -4, pInsp: -9 },
  },
  {
    id: 'dep_loop',
    cat: 'hazards',
    tone: 'amber',
    en: 'Dependent Fluid Loop',
    th: 'สายตกท้องช้าง',
    vignette: {
      en: 'Drainage tubing loops down below bottle level, accumulating a column of fluid.',
      th: 'สายระบายหย่อนตกท้องช้างต่ำกว่าระดับขวด มีสารน้ำขังเป็นแนวในท่อ',
    },
    expected: {
      en: 'Fluid column creates hydrostatic back-pressure (+2 to +4 cmH₂O), dampening tidaling and air evacuation.',
      th: 'ลำน้ำขังต้านแรงดัน (+2 ถึง +4 cmH₂O) ขัดขวางการระบายลมและลดการกระเพื่อม',
    },
    apply: { hSeal: 2.0, hFluid: 2.0, hSuction: 20, wallSuctionMode: 'standard', bottleHeightCm: -60, fault: 'dep_loop', breathingOn: true, pExp: -4, pInsp: -9 },
  },
  {
    id: 'fluid_trap',
    cat: 'hazards',
    tone: 'amber',
    en: '1-Bottle Fluid Trap (+6 cm)',
    th: 'น้ำล้นใน 1 ขวด (+6 ซม.)',
    vignette: {
      en: '1-Bottle system accumulated 600 mL of effusion. Fluid level rose by +6 cm.',
      th: 'ระบบ 1 ขวดที่มีสารน้ำระบายออกมา 600 มล. ระดับน้ำในขวดสูงขึ้น +6 ซม.',
    },
    expected: {
      en: 'Cracking pressure escalated to +8 cmH₂O. High expiratory resistance trapping air.',
      th: 'แรงต้านเปิดลิ้นพุ่งสูงเป็น +8 cmH₂O ผู้ป่วยต้องออกแรงหายใจออกมหาศาลเพื่อไล่ลม',
    },
    apply: { system: '1b', hSeal: 2.0, hFluid: 6.0, hSuction: 20, wallSuctionMode: 'standard', bottleHeightCm: -60, fault: 'none', breathingOn: false, pStatic: 5 },
  },
  {
    id: 'suction_off_closed',
    cat: 'hazards',
    tone: 'rose',
    en: 'Wall Suction OFF (Connected!)',
    th: 'ปิดแรงดูดแต่เสียบสายคา!',
    vignette: {
      en: 'Wall vacuum turned OFF but suction tubing left clamped/occluded on 3rd bottle vent.',
      th: 'ปิดเครื่องดูดสุญญากาศที่ผนัง แต่ลืมปลดสายหรือปิดรูระบายของขวดที่ 3',
    },
    expected: {
      en: 'Trapped positive pressure chamber (+5 cmH₂O). Air cannot escape (Tension hazard).',
      th: 'เกิดความดันบวกขังในขวด (+5 cmH₂O) ลมระบายออกไม่ได้ เสี่ยงเกิด Tension Pneumothorax',
    },
    apply: { system: '3b', hSeal: 2.0, hFluid: 1.0, hSuction: 20, wallSuctionMode: 'off_closed', bottleHeightCm: -60, fault: 'none', breathingOn: true, pExp: -2, pInsp: -7 },
  },
  {
    id: 'seal_lost',
    cat: 'hazards',
    tone: 'rose',
    en: 'Loss of Water Seal (<1 cm)',
    th: 'น้ำพร่อง (หลุด Seal)',
    vignette: {
      en: 'Water seal bottle knocked over or sterile water evaporated below straw tip (h_seal = 0 cm).',
      th: 'ขวดเอียงล้มหรือน้ำระเหยจนปลายหลอดพ้นผิวน้ำ (หลุด Water Seal)',
    },
    expected: {
      en: 'Seal lost! Deep inspiration directly sucks atmospheric air into pleural space.',
      th: 'เสียลิ้นทางเดียว! หายใจเข้าลึกจะดูดลมห้องกลับเข้าช่องอกทันที',
    },
    apply: { hSeal: 0.0, hFluid: 0.0, hSuction: 20, wallSuctionMode: 'off_open', bottleHeightCm: -60, fault: 'none', breathingOn: true, pExp: -4, pInsp: -9 },
  },
  {
    id: 'bottle_high',
    cat: 'hazards',
    tone: 'rose',
    en: 'Bottle Above Chest (+15 cm)',
    th: 'ยกขวดสูงกว่าอก (+15 ซม.)',
    vignette: {
      en: 'Orderly placed drainage bottle on the stretcher above patient chest during transport (+15 cm).',
      th: 'เจ้าหน้าที่วางขวดระบายบนเตียงสูงกว่าหน้าอกผู้ป่วยระหว่างเคลื่อนย้าย (+15 ซม.)',
    },
    expected: {
      en: 'Hydrostatic siphoning: bottle fluid flows backwards down the tube into the pleural space.',
      th: 'กาลักน้ำย้อนกลับ: สารน้ำในขวดจะไหลย้อนกลับเข้าสู่ช่องเยื่อหุ้มปอดทันที',
    },
    apply: { system: '2b', hSeal: 2.0, hFluid: 3.0, hSuction: 20, wallSuctionMode: 'off_open', bottleHeightCm: 15, fault: 'none', breathingOn: true, pExp: -4, pInsp: -9 },
  },
  {
    id: 'digital_normal',
    cat: 'digital',
    tone: 'teal',
    en: 'Digital: Post-Op (<30 mL/min)',
    th: 'ดิจิทัล: หลังผ่าตัด (<30 มล./นาที)',
    vignette: {
      en: 'Post-op patient connected to digital drain (Thopaz+) with minimal air leak (<30 mL/min).',
      th: 'ผู้ป่วยหลังผ่าตัดต่อเครื่องระบายดิจิทัล ตรวจวัดลมรั่วได้ต่ำมาก (<30 มล./นาที)',
    },
    expected: {
      en: 'Digital flow <30 mL/min for >8-12 hours. Meets ESTS consensus criteria for safe tube removal.',
      th: 'ลมรั่ว <30 มล./นาที ต่อเนื่อง เข้าเกณฑ์ฉันทามติ ESTS สามารถพิจารณาถอดสายระบายได้อย่างปลอดภัย',
    },
    apply: { system: 'dry', hSeal: 2.0, hFluid: 3.0, hSuction: 20, wallSuctionMode: 'standard', bottleHeightCm: -60, fault: 'none', breathingOn: true, pExp: -4, pInsp: -9 },
  },
  {
    id: 'digital_bpf',
    cat: 'digital',
    tone: 'orange',
    en: 'Digital: Active Air Leak (BPF)',
    th: 'ดิจิทัล: ลมรั่วชัดเจน (BPF)',
    vignette: {
      en: 'Digital drain monitoring persistent alveolar air leak following wedge resection.',
      th: 'เครื่องดิจิทัลตรวจพบการรั่วของลมถุงลมปอดต่อเนื่องหลังผ่าตัดรูปลิ่ม',
    },
    expected: {
      en: 'Digital flow reads 250-450 mL/min with active leak warning. Tube removal contraindicated.',
      th: 'หน้าปัดดิจิทัลแสดงอัตราลมรั่ว 250-450 มล./นาที ห้ามถอดสายระบายเด็ดขาด',
    },
    apply: { system: 'dry', hSeal: 2.0, hFluid: 1.5, hSuction: 20, wallSuctionMode: 'standard', bottleHeightCm: -60, fault: 'air_leak_bpf', breathingOn: true, pExp: -2, pInsp: -7 },
  },
  {
    id: 'pleurodesis_dwell',
    cat: 'procedures',
    tone: 'purple',
    en: 'Pleurodesis: 1-hr Clamping Dwell',
    th: 'Pleurodesis: ช่วงหนีบยา 1 ชม.',
    vignette: {
      en: 'Patient with malignant pleural effusion received 4 g sterile talc slurry. Chest tube clamped for the mandatory 1-hour dwell time.',
      th: 'ผู้ป่วยน้ำในช่องปอดจากมะเร็งได้รับ Talc slurry 4 กรัม สาย ICD ถูกหนีบค้างไว้เป็นเวลา 1 ชั่วโมงเพื่อให้ยากระจายตัวทั่วเยื่อหุ้มปอด',
    },
    expected: {
      en: 'Tube is clamped. Meniscus is motionless. Nurse observes vitals every 15 min. UNCLAMP immediately if dyspnea or tension develops.',
      th: 'สายถูกหนีบ ระดับน้ำนิ่งสนิท พยาบาลตรวจวัดสัญญาณชีพทุก 15 นาที หากมีอาการเหนื่อยหรือสงสัย Tension ต้องรีบปลดแคลมป์ทันที',
    },
    apply: { system: '2b', hSeal: 2.0, hFluid: 1.5, hSuction: 20, wallSuctionMode: 'standard', bottleHeightCm: -60, fault: 'none', breathingOn: true, pExp: -3, pInsp: -8 },
  },
  {
    id: 'trapped_lung',
    cat: 'procedures',
    tone: 'indigo',
    en: 'Trapped Lung (MPE / High Elastance)',
    th: 'ปอดติดแข็ง (Trapped Lung / ปอดไม่ขยาย)',
    vignette: {
      en: 'Metastatic lung adenocarcinoma with visceral pleural thickening. High pleural elastance creates exaggerated negative swings (−20 to −4 cmH₂O).',
      th: 'มะเร็งปอดแพร่กระจายมีพังผืดหนาหุ้มปอด (visceral peel) ความยืดหยุ่นช่องอกสูงทำให้ความดันลบแกว่งกว้างมากผิดปกติ (−20 ถึง −4 cmH₂O)',
    },
    expected: {
      en: 'Exaggerated tidaling (16 cm swing). Visceral-parietal pleural apposition impossible. Chemical pleurodesis will fail; Indwelling Pleural Catheter (IPC) indicated.',
      th: 'น้ำกระเพื่อมกว้างผิดปกติ (ช่วงแกว่ง 16 ซม.) ผิวปอดไม่สามารถแนบผนังอกได้ การทำ chemical pleurodesis จะล้มเหลว แนะนำใส่สาย IPC แทน',
    },
    apply: { system: '2b', hSeal: 2.0, hFluid: 2.5, hSuction: 20, wallSuctionMode: 'standard', bottleHeightCm: -60, fault: 'none', breathingOn: true, pExp: -4, pInsp: -20 },
  },
];

// Troubleshooting matrix cards
const TROUBLESHOOTING_ITEMS = [
  {
    id: 'tube_leak',
    cat: 'leak',
    severity: 'critical',
    simPreset: 'tube_leak',
    en: {
      title: 'Continuous Bubbling in Water Seal (Tube / Air Leak)',
      sign: 'Continuous bubbling in the water-seal bottle during BOTH inspiration and expiration.',
      causes: [
        'External system leak: loose chest-tube-to-tubing connector, cracked Y-connector, loose bottle stopper, or chest tube side-hole pulled partially outside skin.',
        'True patient air leak: large bronchopleural fistula (BPF) or lung laceration (especially under suction or positive-pressure ventilation).',
      ],
      steps: [
        'Inspect insertion dressing & feel for subcutaneous emphysema or exposed sentinel drainage hole.',
        'Perform Stepwise Clamp Test (briefly < 1–2 s each step, starting closest to chest wall):',
        '• Clamp at chest exit → Bubbling STOPS = Air leak is from the PATIENT (lung/pleural space) or migrated side-hole.',
        '• Clamp at chest exit → Bubbling CONTINUES = Air leak is DISTAL in tubing, connectors, or bottle.',
        '• Walk clamp down past each connector: when bubbling stops, that junction/segment is the leak! Tighten, secure with tape/cable tie, or replace cracked bottle.',
      ],
      neverDo: 'NEVER leave the chest tube clamped while troubleshooting — an active air leak will rapidly cause Tension Pneumothorax!',
    },
    th: {
      title: 'ฟองอากาศผุดต่อเนื่องในขวด Water Seal (ท่อรั่ว vs ลมรั่วจากปอด)',
      sign: 'มีฟองอากาศผุดตลอดเวลาทั้งช่วงหายใจเข้าและหายใจออกในขวด Water Seal',
      causes: [
        'รอยรั่วภายนอกระบบ (Tube/System Leak): ข้อต่อหลวม ท่อแตก จุกยางขวดปิดไม่สนิท หรือรูข้างของสาย ICD เลื่อนออกมาอยู่นอกช่องอก/ใต้ผิวหนัง',
        'ลมรั่วจากปอดผู้ป่วยจริง: Bronchopleural fistula (BPF) หรือปอดฉีกขาด (พบชัดขึ้นเมื่อต่อ suction หรือเครื่องช่วยหายใจ)',
      ],
      steps: [
        'ตรวจแผลใส่สายว่ามีลมใต้ผิวหนัง (subcutaneous emphysema) หรือเห็นรูข้าง (sentinel hole) โผล่พ้นผิวหนังหรือไม่',
        'ทำ Stepwise Clamp Test (หนีบสายสั้นๆ < 1–2 วินาที ไล่จากใกล้ตัวผู้ป่วยลงไปหาขวด):',
        '• หนีบชิดผนังอกแล้วฟองหยุดทันที = ลมรั่วมาจากตัวผู้ป่วย (ปอดรั่ว หรือรูสายเลื่อนหลุด)',
        '• หนีบชิดผนังอกแล้วฟองยังผุดต่อ = รอยรั่วอยู่ถัดลงมาในสาย ข้อต่อ หรือตัวขวด',
        '• เลื่อนคีมหนีบไล่ลงมาทีละข้อต่อ จุดที่หนีบแล้วฟองหยุดคือจุดที่รั่ว! ให้ขันแน่น พันเทป/รัดสาย หรือเปลี่ยนขวดใหม่',
      ],
      neverDo: 'ห้ามหนีบสายทิ้งไว้นานเด็ดขาด เพราะถ้ามีลมรั่วจากปอด จะเกิด Tension Pneumothorax อย่างรวดเร็ว!',
    },
    sources: [
      { key: 'statpearls', label: 'StatPearls' },
      { key: 'bts_statement', label: 'BTS 2023' },
    ],
  },
  {
    id: 'no_tidaling',
    cat: 'tidaling',
    severity: 'caution',
    simPreset: 'kink_clot',
    en: {
      title: 'Cessation of Tidaling (No Respiratory Fluctuation)',
      sign: 'Water column in the submerged seal tube stays motionless instead of rising on inspiration and falling on expiration.',
      causes: [
        'Favorable: Full lung re-expansion (pleural space obliterated, visceral pleura sealing tube holes).',
        'Obstructive: Tubing kinked under bed/patient, blood clot/fibrin plug inside tube, accidental clamp left closed, or fluid-filled dependent loop.',
        'Note: With 3-bottle active suction ON, tidaling is normally dampened; briefly pause/pinch suction only if clinically assessing.',
      ],
      steps: [
        'Assess patient first (SpO₂, respiratory rate, dyspnea, trachea midline, breath sounds).',
        'Inspect entire tubing length from chest wall to bottle for kinks, patient lying on tube, or forgotten clamp.',
        'Check for dependent loops and drain into bottle.',
        'If clot visible, gently squeeze/hand-over-hand compress ("milk") softly toward bottle; obtain CXR to distinguish full re-expansion vs. occluded tube.',
      ],
      neverDo: 'Avoid aggressive "tube stripping" with rollers — generates extreme negative spikes (−300 to −400 cmH₂O) that damage lung tissue.',
    },
    th: {
      title: 'ระดับน้ำในท่อ Water Seal ไม่กระเพื่อม (Loss of Tidaling)',
      sign: 'น้ำในหลอดแก้วขวด Water Seal นิ่งสนิท ไม่ขยับขึ้นลงตามจังหวะหายใจเข้า-ออก',
      causes: [
        'สาเหตุที่ดี: ปอดขยายตัวเต็มที่แล้ว (เยื่อหุ้มปอดแนบชิดปิดรูท่อระบาย)',
        'สาเหตุอุดตัน: สายพับงอถูกทับ ก้อนเลือด/ไฟบรินอุดตัน ลืมเปิดแคลมป์ที่หนีบไว้ หรือสายตกท้องช้างมีน้ำขัง',
        'หมายเหตุ: ในระบบ 3 ขวดที่เปิด suction อยู่ การกระเพื่อมอาจลดลงตามธรรมชาติ',
      ],
      steps: [
        'ประเมินอาการผู้ป่วยก่อนเสมอ (SpO₂, อัตราหายใจ, อาการเหนื่อย, หลอดลมเอียง, เสียงปอด)',
        'ไล่ตรวจสายตลอดแนวตั้งแต่ผนังอกถึงขวดว่ามีจุดพับงอ ผู้ป่วยนอนทับ หรือลืมปลดแคลมป์หรือไม่',
        'ยกสายส่วนที่ตกท้องช้างให้สารน้ำไหลลงขวด',
        'หากมีลิ่มเลือดให้บีบคลึงเบาๆ (gentle milking) ไปทางขวด และส่งถ่ายภาพรังสีทรวงอก (CXR) เพื่อแยกปอดขยายเต็มที่ vs ท่อตัน',
      ],
      neverDo: 'หลีกเลี่ยงการรูดสายแรงๆ (aggressive stripping) เพราะสร้างแรงดูดชั่วขณะถึง −300 ถึง −400 cmH₂O ทำลายเนื้อปอดได้',
    },
    sources: [
      { key: 'statpearls', label: 'StatPearls' },
      { key: 'bts_guideline', label: 'BTS 2023' },
    ],
  },
  {
    id: 'suction_off_danger',
    cat: 'suction',
    severity: 'critical',
    simPreset: 'suction_off_closed',
    en: {
      title: 'No Bubbling in Bottle 3 (Suction Control) / Wall Suction Off',
      sign: 'No bubbling seen in the Bottle 3 atmospheric vent tube while set up as a 3-bottle system.',
      causes: [
        'Wall vacuum regulator turned OFF, set below h_suction (e.g. < 20 cmH₂O), or suction tubing kinked/disconnected.',
        'CRITICAL TRAP: If wall suction is OFF while tubing remains plugged into Bottle 3 outlet, the system is sealed shut with no atmospheric vent!',
      ],
      steps: [
        'Check wall suction gauge and tubing connection.',
        'If suction IS desired: slowly increase wall regulator until gentle, continuous bubbling appears in Bottle 3.',
        'If transitioning to gravity (no suction): DISCONNECT the suction tubing from Bottle 3 port so it vents freely to room air!',
      ],
      neverDo: 'NEVER leave wall suction turned OFF with the tubing still connected to Bottle 3 — air cannot escape and can trigger tension pneumothorax!',
    },
    th: {
      title: 'ขวดควบคุมแรงดูด (ขวดที่ 3) ไม่มีฟองอากาศ / ปิด Wall Suction',
      sign: 'ไม่พบฟองอากาศในขวดที่ 3 ทั้งที่ต่อระบบ 3 ขวดอยู่',
      causes: [
        'ปิดสวิตช์ wall suction, ตั้งแรงดูดผนังต่ำกว่าความลึกน้ำในขวดที่ 3, หรือสายดูดพับ/หลุด',
        'กับดักอันตราย: ถ้าปิด wall suction โดยยังเสียบสายคาอยู่ที่ขวดที่ 3 อากาศจะไม่สามารถระบายออกสู่ภายนอกได้ (ระบบปิดตัน)!',
      ],
      steps: [
        'ตรวจเช็กมาตรวัดแรงดูดที่ผนังและข้อต่อสายดูด',
        'หากยังต้องการใช้แรงดูด: ค่อยๆ หมุนเพิ่ม wall suction จนเกิดฟองอากาศผุดเบาๆ ต่อเนื่องในขวดที่ 3',
        'หากต้องการเปลี่ยนเป็นระบบแรงโน้มถ่วง (ไม่ดูด): ต้องถอดสายดูดออกจากขวดที่ 3 เพื่อเปิดช่องระบายอากาศสู่บรรยากาศ!',
      ],
      neverDo: 'ห้ามปิด wall suction โดยเสียบสายคาไว้ที่ขวดที่ 3 เด็ดขาด เพราะลมระบายออกไม่ได้ เสี่ยงเกิด tension pneumothorax!',
    },
    sources: [
      { key: 'zisis', label: 'Zisis 2015' },
      { key: 'statpearls', label: 'StatPearls' },
    ],
  },
  {
    id: 'suction_vigorous',
    cat: 'suction',
    severity: 'caution',
    simPreset: 'normal',
    en: {
      title: 'Vigorous / Roaring Bubbling in Bottle 3 (Suction Control)',
      sign: 'Loud, turbulent boiling in Bottle 3 suction chamber.',
      causes: [
        'Wall vacuum turned up much higher than needed (e.g., −150 mmHg when h_suction = 20 cmH₂O).',
      ],
      steps: [
        'Understand the physics: chamber suction stays clamped at −h_suction (−20 cmH₂O); higher wall vacuum does NOT pull harder on the lung.',
        'Vigorous bubbling accelerates water evaporation, slowly dropping h_suction below target.',
        'Dial wall suction regulator DOWN until gentle, steady bubbling is achieved; top up sterile water in Bottle 3 to the prescribed cm mark.',
      ],
      neverDo: 'Do not confuse Bottle 3 gentle bubbling (normal!) with Bottle 2 water-seal bubbling (air leak!).',
    },
    th: {
      title: 'ฟองอากาศเดือดพล่านเสียงดังในขวดที่ 3 (Suction Control)',
      sign: 'ฟองอากาศผุดแรงและเสียงดังมากในขวดควบคุมแรงดูด (ขวดที่ 3)',
      causes: [
        'เปิดแรงดูดผนัง (wall vacuum) แรงเกินความจำเป็น',
      ],
      steps: [
        'เข้าใจหลักฟิสิกส์: แรงดูดที่ปอดยังคงถูกจำกัดเท่าความลึกน้ำ (−20 cmH₂O) ไม่ได้แรงขึ้นตามปุ่มผนัง',
        'ฟองที่เดือดแรงเกินไปทำให้น้ำระเหยเร็ว ทำให้ระดับความลึก h_suction ลดลงกว่าที่แพทย์สั่ง',
        'หมุนลด wall suction ลงจนเหลือเพียงฟองอากาศผุดเบาๆ สม่ำเสมอ และเติมน้ำปลอดเชื้อในขวดที่ 3 ให้ได้ระดับที่กำหนด',
      ],
      neverDo: 'อย่าสับสนระหว่างฟองในขวดที่ 3 (ปกติเมื่อใช้ suction) กับฟองในขวดที่ 2 (แปลว่ามีลมรั่ว)!',
    },
    sources: [
      { key: 'zisis', label: 'Zisis 2015' },
      { key: 'statpearls', label: 'StatPearls' },
    ],
  },
  {
    id: 'seal_lost',
    cat: 'emergency',
    severity: 'critical',
    simPreset: 'seal_lost',
    en: {
      title: 'Water Seal Depth < 2 cm or Tip Exposed (Loss of Seal)',
      sign: 'Sterile water level dropped below the 2 cm mark or below the patient tube tip.',
      causes: [
        'Water evaporation over days, bottle tipped over, or incorrect initial filling.',
      ],
      steps: [
        'Immediately refill sterile water/saline into the water-seal bottle to restore 2 cm submersion.',
        'Check patient breathing, SpO₂, and order CXR if tip was exposed during inspiration (iatrogenic pneumothorax risk).',
      ],
      neverDo: 'Never operate a chest drain with an unsubmerged water-seal tube — ambient air is sucked into the chest with every breath!',
    },
    th: {
      title: 'ระดับน้ำขวด Water Seal ต่ำกว่า 2 ซม. หรือปลายท่อลอยพ้นน้ำ',
      sign: 'ระดับน้ำลดต่ำกว่าขีด 2 ซม. หรือปลายท่อจุ่มไม่ถึงน้ำ ทำให้เสียระบบลิ้นทางเดียว',
      causes: [
        'น้ำระเหย ขวดเอียงล้ม หรือเติมน้ำเริ่มต้นไม่เพียงพอ',
      ],
      steps: [
        'รีบเติมน้ำปลอดเชื้อในขวด Water Seal ให้ปลายท่อจุ่มลึก 2 ซม. ทันที',
        'ประเมินการหายใจและ SpO₂ ของผู้ป่วย และพิจารณาถ่าย CXR หากปลายท่อลอยพ้นน้ำขณะผู้ป่วยหายใจเข้า (เสี่ยงลมรั่วซ้ำ)',
      ],
      neverDo: 'ห้ามปล่อยให้ปลายท่อ water seal ลอยพ้นน้ำ เพราะอากาศภายนอกจะถูกดูดเข้าสู่ช่องอกทุกครั้งที่หายใจเข้า!',
    },
    sources: [
      { key: 'bts_statement', label: 'BTS 2023' },
      { key: 'statpearls', label: 'StatPearls' },
    ],
  },
  {
    id: 'dep_loop',
    cat: 'obstruction',
    severity: 'caution',
    simPreset: 'dep_loop',
    en: {
      title: 'Dependent Fluid-Filled Loop in Tubing',
      sign: 'Tubing droops down to the floor creating a U-bend filled with fluid; sluggish drainage or dampened tidaling.',
      causes: [
        'Excess tubing hanging below the bottle inlet traps fluid, creating an extra hydrostatic column (+5 to +15 cmH₂O resistance).',
      ],
      steps: [
        'Lift the tubing loop smoothly in a straight inclined path so trapped fluid drains downward into the collection bottle.',
        'Coil excess tubing flat on the bed sheet (never below bottle level) and secure to sheet with tape/clip.',
      ],
      neverDo: 'Do not leave U-shaped loops hanging off the bedside.',
    },
    th: {
      title: 'สายระบายตกท้องช้างมีสารน้ำขัง (Dependent Loop)',
      sign: 'สายระบายห้อยเป็นรูปตัวยูต่ำกว่าระดับขวดและมีน้ำ/เลือดขังค้างในโค้งสาย ทำให้ระบายช้าลง',
      causes: [
        'น้ำที่ขังในโค้งสายสร้างแรงดันต้านจากน้ำหนักของเหลว (+5 ถึง +15 cmH₂O) ขวางลมและสารน้ำไม่ให้ไหลลงขวด',
      ],
      steps: [
        'ค่อยๆ ยกสายส่วนที่ตกท้องช้างให้ลาดลงเป็นแนวตรงเพื่อไล่สารน้ำลงขวด',
        'ม้วนสายส่วนเกินวางราบบนเตียงผู้ป่วยแล้วติดคลิป/เทปยึดไว้ ไม่ให้ห้อยต่ำกว่าปากขวด',
      ],
      neverDo: 'อย่าปล่อยให้สายห้อยเป็นท้องช้างข้างเตียง',
    },
    sources: [
      { key: 'statpearls', label: 'StatPearls' },
    ],
  },
  {
    id: 'bottle_high',
    cat: 'emergency',
    severity: 'critical',
    simPreset: 'bottle_high',
    en: {
      title: 'Drainage Bottle Lifted Above Chest Level',
      sign: 'Bottle placed on bed/stretcher at or above thoracic level during transfer.',
      causes: [
        'Hydrostatic gradient reverses: fluid and contaminated contents in Bottle 1 or Water Seal can siphon directly back into the pleural cavity!',
      ],
      steps: [
        'Immediately lower the drainage system upright to ≥ 40–60 cm below chest level.',
        'Monitor patient for dyspnea, fever, or new effusion; notify physician if backflow occurred.',
      ],
      neverDo: 'NEVER lift an unclamped chest drainage bottle above the patient’s chest level during bed transfer or ambulation.',
    },
    th: {
      title: 'ยกขวดระบายสูงกว่าระดับหน้าอกผู้ป่วย',
      sign: 'วางขวดบนเตียงหรือยกขวดสูงเท่ากับหรือสูงกว่าทรวงอกขณะเคลื่อนย้าย',
      causes: [
        'แรงโน้มถ่วงย้อนกลับ ทำให้เลือด/สารน้ำปนเปื้อนจากขวดไหลย้อนกลับเข้าสู่ช่องเยื่อหุ้มปอดได้!',
      ],
      steps: [
        'ลดระดับขวดให้ตั้งตรงและอยู่ต่ำกว่าระดับหน้าอกอย่างน้อย 40–60 ซม. ทันที',
        'สังเกตอาการผู้ป่วยและแจ้งแพทย์หากสงสัยว่ามีสารน้ำไหลย้อนเข้าช่องอก',
      ],
      neverDo: 'ห้ามยกขวดระบายที่ไม่ได้หนีบสายสูงกว่าระดับหน้าอกขณะย้ายเตียงหรือพาเดินเด็ดขาด',
    },
    sources: [
      { key: 'bts_statement', label: 'BTS 2023' },
      { key: 'statpearls', label: 'StatPearls' },
    ],
  },
  {
    id: 'disconnection',
    cat: 'emergency',
    severity: 'critical',
    simPreset: 'seal_lost',
    en: {
      title: 'Accidental Disconnection vs. Complete Tube Dislodgement',
      sign: 'Either (A) chest tube separates from drainage tubing, or (B) entire chest tube pulls out of chest wall.',
      causes: [
        'Patient movement, unsecured connections, or loose stay suture.',
      ],
      steps: [
        'If DISCONNECTED (tube still in chest): Wipe ends with antiseptic and reconnect quickly; if contaminated/new unit needed, immediately submerge distal chest tube tip 2 cm into a bottle of sterile water/saline as a temporary seal.',
        'If DISLODGED (pulled out of chest wall): Immediately apply a sterile occlusive dressing taped on 3 SIDES (flutter valve allows air out, prevents air in), give O₂, monitor vitals, prepare sterile re-insertion at new site.',
      ],
      neverDo: 'NEVER push a dislodged chest tube back into the chest (infection risk). Do NOT tape all 4 sides if an air leak is present (tension risk).',
    },
    th: {
      title: 'สายหลุดจากข้อต่อ (Disconnection) vs สายหลุดออกจากหน้าอก (Dislodgement)',
      sign: '(ก) ข้อต่อระหว่างสาย ICD กับขวดหลุดออกจากกัน หรือ (ข) สาย ICD หลุดออกจากแผลที่ผนังอก',
      causes: [
        'ผู้ป่วยขยับตัว สายตึงรั้ง หรือไหมยึดสาย (stay suture) หลุด',
      ],
      steps: [
        'กรณีข้อต่อหลุด (สายยังอยู่ในอก): เช็ดปลายข้อต่อด้วยน้ำยาฆ่าเชื้อแล้วต่อกลับทันที หากปนเปื้อนหรือรอขวดใหม่ ให้จุ่มปลายสาย ICD ลงในขวดน้ำเกลือ/น้ำปลอดเชื้อลึก 2 ซม. เป็น water seal ชั่วคราว',
        'กรณีสายหลุดออกจากอก: รีบปิดแผลด้วยผ้าก๊อซปลอดเชื้อกันอากาศแล้วติดเทป 3 ด้าน (3-sided occlusive dressing ให้ลมออกได้แต่เข้าไม่ได้) ให้ออกซิเจน เฝ้าระวังสัญญาณชีพ และเตรียมใส่สายใหม่',
      ],
      neverDo: 'ห้ามดันสายที่หลุดออกมานอกอกกลับเข้าไปใหม่เด็ดขาด (เสี่ยงติดเชื้อรุนแรง) และห้ามปิดเทปทึบทั้ง 4 ด้านถ้าสงสัยลมรั่ว!',
    },
    sources: [
      { key: 'atls', label: 'ATLS 10th Ed.' },
      { key: 'statpearls', label: 'StatPearls' },
    ],
  },
  {
    id: 'massive_hemothorax',
    cat: 'emergency',
    severity: 'critical',
    simPreset: 'fluid_trap',
    en: {
      title: 'Massive Hemothorax / Surgical Thoracotomy Thresholds',
      sign: 'Immediate rush of ≥ 1,500 mL blood upon insertion, or ongoing output ≥ 200 mL/hr for 2–4 hours.',
      causes: [
        'Major intrathoracic vascular injury (intercostal artery, internal mammary, pulmonary hilum, great vessels).',
      ],
      steps: [
        'Alert thoracic/trauma surgery immediately for urgent thoracotomy or VATS exploration.',
        'Simultaneous volume resuscitation (blood products / massive transfusion protocol) — DO NOT clamp chest tube to "tamponade" bleeding unless directed by surgeon.',
      ],
      neverDo: 'Do NOT clamp a bleeding chest tube hoping to stop hemorrhage — retained hemothorax causes tamponade physiology and fibrothorax.',
    },
    th: {
      title: 'เกณฑ์เลือดออกมากในช่องอกที่ต้องผ่าตัด (Massive Hemothorax)',
      sign: 'เลือดออกทันที ≥ 1,500 มล. หลังใส่สาย หรือออกต่อเนื่อง ≥ 200 มล./ชม. นาน 2–4 ชั่วโมง',
      causes: [
        'การบาดเจ็บของหลอดเลือดใหญ่ในทรวงอก (intercostal, internal mammary, ขั้วปอด)',
      ],
      steps: [
        'รายงานศัลยแพทย์ทรวงอก/อุบัติเหตุทันทีเพื่อเตรียมผ่าตัดฉุกเฉิน (Thoracotomy / VATS)',
        'ให้สารน้ำและเลือดทดแทนควบคู่กัน ห้ามหนีบสายเพื่อหวังหยุดเลือด',
      ],
      neverDo: 'ห้ามหนีบสาย ICD เพื่ออุดเลือดเด็ดขาด เพราะเลือดคั่งจะกดเบียดหัวใจ/ปอด และเกิดพังผืดตามมา',
    },
    sources: [
      { key: 'atls', label: 'ATLS 10th Ed.' },
      { key: 'bts_guideline', label: 'BTS 2023' },
    ],
  },
];

// Bilingual UI Dictionary

// Chemical Pleurodesis & Specialty Drainage Reference Data (BTS 2023, TIME1 & AMPLE)
const PLEURODESIS_DATA = {
  indications: {
    en: [
      {
        title: 'Malignant Pleural Effusion (MPE)',
        desc: 'Recurrent symptomatic pleural effusion from metastatic carcinoma (lung, breast, ovary, mesothelioma). Goal: palliate dyspnea and prevent recurrent fluid reaccumulation.',
        criteria: 'Requires full or near-complete lung re-expansion (≥ 80–90% visceral-parietal pleural apposition on post-drainage CXR or thoracic ultrasound).'
      },
      {
        title: 'Trapped Lung / Non-Expandable Lung',
        desc: 'Visceral pleural peel or endobronchial obstruction prevents lung expansion despite drainage (high pleural elastance > 14.5 cmH₂O/L).',
        criteria: 'Chemical pleurodesis will FAIL (apposition impossible). Indwelling Pleural Catheter (IPC / PleurX) is the BTS gold standard treatment.'
      },
      {
        title: 'Persistent Air Leak (PAL / Secondary Pneumothorax)',
        desc: 'Prolonged alveolar-pleural air leak (> 5–7 days post-pulmonary resection or in severe COPD/emphysema) where surgery is contraindicated.',
        criteria: 'Autologous blood patch pleurodesis (50–100 mL patient blood) or talc slurry instillation.'
      }
    ],
    th: [
      {
        title: 'ภาวะน้ำในช่องเยื่อหุ้มปอดจากมะเร็ง (Malignant Pleural Effusion - MPE)',
        desc: 'น้ำในช่องปอดจากมะเร็งแพร่กระจาย (มะเร็งปอด, เต้านม, รังไข่, Mesothelioma) ที่กลับเป็นซ้ำและทำให้เหนื่อย เป้าหมายคือบรรเทาอาการเหนื่อยและป้องกันน้ำสะสมซ้ำ',
        criteria: 'ต้องยืนยันว่าปอดสามารถขยายตัวแนบชิดผนังอกได้สมบูรณ์หรือเกือบสมบูรณ์ (≥ 80–90% apposition บนภาพรังสีทรวงอกหรืออัลตราซาวด์)'
      },
      {
        title: 'ภาวะปอดติดแข็งไม่ยอมขยาย (Trapped Lung / Non-Expandable Lung)',
        desc: 'มีเยื่อพังผืดหุ้มปอด (visceral peel) หรือหลอดลมอุดตัน ทำให้ปอดไม่สามารถขยายมาแตะผนังอกได้แม้ดูดน้ำออกหมด (ความยืดหยุ่นช่องอกผิดปกติ Pleural Elastance สูง)',
        criteria: 'การทำ Chemical Pleurodesis จะล้มเหลว (เพราะผิวปอดไม่ชนผนังอก) ข้อบ่งชี้มาตรฐานตาม BTS คือการใส่สายระบายค้างไว้ที่บ้าน (Indwelling Pleural Catheter - IPC / PleurX)'
      },
      {
        title: 'ลมรั่วจากปอดเรื้อรัง (Persistent Air Leak - PAL / Secondary Pneumothorax)',
        desc: 'ลมรั่วจากถุงลมปอดต่อเนื่องเกิน 5–7 วันหลังผ่าตัดปอด หรือในผู้ป่วย COPD/ถุงลมโป่งพองที่มีความเสี่ยงสูงต่อการผ่าตัด',
        criteria: 'การทำ Autologous Blood Patch Pleurodesis (ฉีดเลือดตนเอง 50–100 มล.) หรือการหยอด Talc slurry'
      }
    ]
  },
  agents: {
    en: [
      {
        name: 'Talc Slurry (Gold Standard)',
        dose: '4–5 g sterile, large-particle (> 15 µm, asbestos-free) talc',
        vehicle: '50 mL sterile 0.9% Normal Saline + 10–20 mL 1% or 2% Lidocaine',
        success: '80–90% success rate (highest of all chemical agents)',
        pearl: 'Large-particle graded talc avoids systemic absorption and prevents acute respiratory distress syndrome (ARDS).'
      },
      {
        name: 'Doxycycline / Tetracycline',
        dose: '500 mg in 50–100 mL Normal Saline + 10–20 mL 1% Lidocaine',
        vehicle: 'Alternative sclerosing agent when sterile talc is unavailable',
        success: '60–75% success rate (causes pronounced local pain and fever)',
        pearl: 'Requires aggressive pre-medication analgesia; less effective than talc in large randomized trials.'
      },
      {
        name: 'Autologous Blood Patch',
        dose: '50–100 mL patient’s own peripheral venous blood drawn sterilely',
        vehicle: 'Drawn in 50 mL syringes without anticoagulant; instill immediately',
        success: '70–85% seal rate for persistent post-op / alveolar air leaks',
        pearl: 'Acts via mechanical fibrin clot adherence over the visceral pleural defect followed by secondary inflammatory sealing.'
      },
      {
        name: 'Bleomycin',
        dose: '60,000 IU (60 units) in 50–100 mL Normal Saline',
        vehicle: 'Chemotherapeutic sclerosing agent with minimal pain',
        success: '50–65% success rate (expensive, lower efficacy than talc)',
        pearl: 'Used historically in patients with severe pain intolerance; largely replaced by talc slurry.'
      }
    ],
    th: [
      {
        name: 'Talc Slurry (มาตรฐานอันดับ 1 - Gold Standard)',
        dose: 'แป้งทัลก์ปลอดเชื้ออนุภาคใหญ่ (> 15 µm ปราศจากแร่ใยหิน) 4–5 กรัม',
        vehicle: 'น้ำเกลือ 0.9% NSS 50 มล. + ยาชา Lidocaine 1% หรือ 2% 10–20 มล.',
        success: 'อัตราความสำเร็จสูงที่สุด 80–90%',
        pearl: 'ต้องใช้อนุภาคขนาดใหญ่ (> 15 µm) เพื่อป้องกันการดูดซึมเข้ากระแสเลือดจนเกิดภาวะปอดอักเสบเฉียบพลันรุนแรง (ARDS)'
      },
      {
        name: 'Doxycycline / Tetracycline',
        dose: 'Doxycycline 500 มก. ผสมใน 0.9% NSS 50–100 มล. + Lidocaine 10–20 มล.',
        vehicle: 'สารระคายเคืองทางเลือกเมื่อไม่มี Talc ปลอดเชื้อ',
        success: 'อัตราความสำเร็จ 60–75% (ทำให้เกิดอาการปวดแสบร้อนและไข้สูงได้บ่อย)',
        pearl: 'ต้องให้ยาแก้ปวดล่วงหน้าอย่างเต็มที่; ประสิทธิภาพต่ำกว่าแป้งทัลก์อย่างมีนัยสำคัญ'
      },
      {
        name: 'Autologous Blood Patch (การฉีดเลือดตนเอง)',
        dose: 'เจาะเลือดดำจากตัวผู้ป่วยเอง 50–100 มล. ด้วยเทคนิคปลอดเชื้อ',
        vehicle: 'ดูดใส่ไซริงค์โดยไม่ใส่สารกันเลือดแข็ง และฉีดเข้าสาย ICD ทันที',
        success: 'อัตราปิดรูลมรั่ว 70–85% สำหรับลมรั่วเรื้อรังหลังผ่าตัดปอด',
        pearl: 'กลไกเกิดจากลิ่มเลือดไฟบรินไปอุดปิดรูรั่วที่ผิวปอดโดยตรง แล้วกระตุ้นการสร้างเนื้อเยื่อเชื่อมปิดสนิท'
      },
      {
        name: 'Bleomycin',
        dose: 'Bleomycin 60,000 IU (60 units) ผสมใน 0.9% NSS 50–100 มล.',
        vehicle: 'ยาเคมีบำบัดที่ออกฤทธิ์ระคายเคืองเยื่อหุ้มปอด ก่อความเจ็บปวดน้อยกว่า',
        success: 'อัตราความสำเร็จ 50–65% (ราคาสูง ประสิทธิภาพต่ำกว่า Talc)',
        pearl: 'เดิมใช้ในรายที่ทนความเจ็บปวดไม่ได้ ปัจจุบันถูกแทนที่ด้วย Talc slurry เกือบทั้งหมด'
      }
    ]
  },
  protocol: {
    en: [
      { step: '1. Patient Pre-medication & Analgesia', detail: 'Administer parenteral opioid/NSAID analgesia 30–45 min prior. Instill 10–20 mL 1% or 2% lidocaine (max 3 mg/kg) intrapleurally via chest tube 10–15 min prior to slurry to thoroughly anesthetize the parietal pleura.' },
      { step: '2. Slurry Instillation & Tube Flush', detail: 'Mix 4–5 g talc with 50 mL sterile saline in a 60 mL catheter-tip syringe. Shake vigorously into suspension and inject slowly into chest tube. Immediately flush with 20–30 mL sterile saline to clear all slurry from the tubing lumen.' },
      { step: '3. Clamping Dwell Time (Exactly 1 Hour)', detail: 'Clamp the chest tube securely for 1 hour (60 minutes) to allow contact between the sclerosing agent and pleural surfaces.' },
      { step: '4. Myth Debunked: Patient Repositioning Not Required', detail: 'BTS Guidelines and the randomized TIME1 trial (JAMA 2015) proved that patient rotation (rolling side to side every 15 min) is UNNECESSARY. Slurry disperses rapidly and uniformly throughout the hemithorax via normal breathing and diaphragmatic movements.' },
      { step: '5. Bedside Vitals & Emergency Unclamping Protocol', detail: 'Monitor SpO₂, RR, BP, and HR every 15 min during clamping. If the patient develops acute shortness of breath, desaturation, tachycardia, or subcutaneous emphysema: UNCLAMP IMMEDIATELY! (Risk of acute hydrothorax or secondary tension pneumothorax).' },
      { step: '6. Post-Pleurodesis Drainage & Tube Removal', detail: 'Unclamp after 1 hour → reconnect to gravity water seal (or −10 to −20 cmH₂O suction if needed for lung apposition). Maintain drainage until output drops < 150–250 mL/24 h (usually 24–48 hours) with lung expanded on CXR.' }
    ],
    th: [
      { step: '1. การให้ยาแก้ปวดและยาชาล่วงหน้า', detail: 'ให้ยาแก้ปวดกลุ่ม Opioids หรือ NSAIDs ทางหลอดเลือด 30–45 นาทีก่อนทำ และหยอดยาชา Lidocaine 1% หรือ 2% ปริมาณ 10–20 มล. (ไม่เกิน 3 มก./กก.) เข้าช่องปอดผ่านสาย ICD ก่อนหยอดแป้ง 10–15 นาที เพื่อระงับความเจ็บปวดที่เยื่อหุ้มปอดชั้นนอก (parietal pleura)' },
      { step: '2. การผสมและหยอดสารระคายเคือง (Slurry)', detail: 'ผสมแป้งทัลก์ 4–5 กรัมในน้ำเกลือปลอดเชื้อ 50 มล. ในไซริงค์ 60 มล. เขย่าให้เข้ากันแล้วค่อยๆ ฉีดเข้าสาย ICD จากนั้นล้างสายทันทีด้วยน้ำเกลือ 20–30 มล. เพื่อไม่ให้แป้งตกค้างอุดตันสาย' },
      { step: '3. การหนีบสายระบาย (Clamping Dwell Time 1 ชม.)', detail: 'หนีบคีมล็อกสายระบายไว้นาน 1 ชั่วโมง (60 นาที) เพื่อให้สารออกฤทธิ์สัมผัสกับผิวเยื่อหุ้มปอดอย่างทั่วถึง' },
      { step: '4. หักล้างความเชื่อเดิม: ไม่จำเป็นต้องพลิกตัวผู้ป่วย!', detail: 'แนวทางเวชปฏิบัติ BTS 2023 และงานวิจัยระดับโลก TIME1 trial (JAMA 2015) พิสูจน์แล้วว่า การจับผู้ป่วยกลิ้งตัวทุก 15 นาทีไม่มีประโยชน์และเพิ่มความทรมาน เพราะการหายใจและการขยับของกะบังลมตามธรรมชาติสามารถกระจายแป้งไปทั่วช่องปอดได้อย่างทั่วถึงอยู่แล้ว' },
      { step: '5. การเฝ้าระวังข้างเตียงและเกณฑ์ปลดแคลมป์ฉุกเฉิน', detail: 'วัด SpO₂, อัตราหายใจ, ชีพจร, ความดันทุก 15 นาทีขณะหนีบสาย หากผู้ป่วยมีอาการเหนื่อยแน่นหน้าอก, ออกซิเจนดรอป, ชีพจรเร็ว หรือมีลมใต้ผิวหนัง ให้ปลดแคลมป์ทันที! (ระวังภาวะน้ำหรือลมสะสมจนเกิด Tension)' },
      { step: '6. การดูแลหลังทำและการถอดสายระบาย', detail: 'เมื่อครบ 1 ชม. ให้ปลดแคลมป์และต่อขวดระบายตามแรงโน้มถ่วง (หรือต่อ suction −10 ถึง −20 cmH₂O หากต้องการแรงดูดช่วยดึงผิวปอด) และพิจารณาถอดสายระบายเมื่อปริมาณน้ำลดลงเหลือ < 150–250 มล./วัน (มักใช้เวลา 24–48 ชม.) และปอดขยายดีบน CXR' }
    ]
  },
  comparison: {
    headers: {
      en: ['Feature / Dimension', 'Talc Slurry Pleurodesis', 'Indwelling Pleural Catheter (IPC)'],
      th: ['คุณสมบัติ / มิติทางคลินิก', 'การทำ Talc Slurry Pleurodesis', 'สายระบายค้างในช่องอก (IPC / PleurX)']
    },
    rows: {
      en: [
        ['Primary Indication', 'Expandable lung (≥ 80–90% apposition)', 'Trapped lung, non-expandable lung, or outpatient preference'],
        ['Hospitalization Required', 'Inpatient admission (typically 2–5 days)', 'Day surgery / Outpatient procedure under local anesthesia'],
        ['Success Rate / Autopleurodesis', '80–90% permanent symphysis', '50–70% spontaneous autopleurodesis over 2–6 months'],
        ['Procedural Pain', 'Moderate to severe pleuritic pain & fever', 'Minimal pain during insertion & home drainages'],
        ['Long-term Burden', 'None once drain is removed', 'Requires home drainage kit & caregiver 2–3x weekly'],
        ['BTS 2023 Recommendation', 'First-line for expandable lung with low bed availability constraints', 'First-line for trapped lung; equal first-line for fully expandable MPE']
      ],
      th: [
        ['ข้อบ่งชี้หลัก', 'ปอดขยายตัวได้ดี (apposition ≥ 80–90%)', 'ปอดติดแข็ง (Trapped lung) หรือผู้ป่วยต้องการกลับบ้านทันที'],
        ['การนอนโรงพยาบาล', 'ต้องนอน รพ. ประมาณ 2–5 วัน', 'ทำแบบผู้ป่วยนอก / ไปกลับได้ ฉีดยาชาเฉพาะที่'],
        ['อัตราสำเร็จในการเชื่อมปอด', '80–90% ภายใน 24–48 ชม.', '50–70% เกิดการเชื่อมตัวเอง (autopleurodesis) ใน 2–6 เดือน'],
        ['ความเจ็บปวดขณะทำ', 'ปวดแสบช่องอกปานกลาง-รุนแรง และมีไข้', 'เจ็บน้อยมากทั้งตอนใส่สายและตอนระบายน้ำที่บ้าน'],
        ['ภาระการดูแลระยะยาว', 'ไม่มีภาระ เมื่อถอดสายแผลหายสนิท', 'ต้องมีชุดดูดสุญญากาศและคนช่วยถ่ายน้ำ 2–3 ครั้ง/สัปดาห์'],
        ['คำแนะนำมาตรฐาน BTS 2023', 'ทางเลือกอันดับ 1 สำหรับปอดขยายได้ดี', 'ทางเลือกอันดับ 1 สำหรับ Trapped lung; เสมอเป็นอันดับ 1 ร่วมสำหรับ MPE ทั่วไป']
      ]
    }
  }
};


// Interactive Biophysical Lab & Hydrodynamic Reference Data
const PHYSICS_LAB_DATA = {
  catheters: [
    { fr: 8, label: '8 Fr (Micro-pigtail)', id_mm: 2.1, relResist: 150.0, indication_en: 'Simple pneumothorax, pediatric', indication_th: 'ลมรั่วขนาดเล็ก, ผู้ป่วยเด็ก' },
    { fr: 10, label: '10 Fr (Small pigtail)', id_mm: 2.7, relResist: 61.5, indication_en: 'Spontaneous pneumothorax, transudate', indication_th: 'ลมรั่วเอง, น้ำใสชนิด transudate' },
    { fr: 12, label: '12 Fr (BTS Small-bore)', id_mm: 3.2, relResist: 29.6, indication_en: 'BTS first-line empyema (+tPA), pleurodesis', indication_th: 'มาตรฐาน BTS หนองในช่องอก (+tPA), pleurodesis' },
    { fr: 14, label: '14 Fr (Standard Small-bore)', id_mm: 3.7, relResist: 16.0, indication_en: 'Complicated effusion, secondary pneumo', indication_th: 'น้ำในช่องปอดชนิดซับซ้อน, ลมรั่วซ้ำ' },
    { fr: 20, label: '20 Fr (Medium-bore)', id_mm: 5.3, relResist: 3.8, indication_en: 'Post-VATS lobectomy, moderate effusion', indication_th: 'หลังผ่าตัด VATS, น้ำปริมาณปานกลาง' },
    { fr: 24, label: '24 Fr (Thoracotomy drain)', id_mm: 6.4, relResist: 1.8, indication_en: 'Post-thoracotomy, traumatic pneumo', indication_th: 'หลังผ่าตัดเปิดอก, ลมรั่วจากอุบัติเหตุ' },
    { fr: 28, label: '28 Fr (Reference Large-bore)', id_mm: 7.5, relResist: 1.0, indication_en: 'ATLS acute hemothorax reference standard', indication_th: 'มาตรฐาน ATLS เลือดออกในช่องอก' },
    { fr: 32, label: '32 Fr (Heavy Large-bore)', id_mm: 8.5, relResist: 0.58, indication_en: 'Massive hemothorax with large clot burden', indication_th: 'เลือดออกปริมาณมากพร้อมลิ่มเลือดหนา' },
    { fr: 36, label: '36 Fr (Extra Large-bore)', id_mm: 9.6, relResist: 0.36, indication_en: 'Severe open trauma, thick fibrinous empyema', indication_th: 'แผลอุบัติเหตุเปิดรุนแรง, หนองข้นเหนียว' },
  ],
  fluids: [
    { id: 'air', name_en: 'Pleural Air', name_th: 'ลมในช่องอก', viscosity_cp: 0.018, density: 0.0012, color: 'text-sky-600', bg: 'bg-sky-50' },
    { id: 'serous', name_en: 'Serous Fluid (Transudate)', name_th: 'น้ำใส (Transudate)', viscosity_cp: 1.0, density: 1.00, color: 'text-amber-600', bg: 'bg-amber-50' },
    { id: 'exudate', name_en: 'Exudate / Chyle', name_th: 'น้ำขุ่น / น้ำเหลือง (Chyle)', viscosity_cp: 1.5, density: 1.02, color: 'text-orange-600', bg: 'bg-orange-50' },
    { id: 'blood', name_en: 'Whole Blood (Hemothorax)', name_th: 'เลือดสด (Hemothorax)', viscosity_cp: 4.0, density: 1.05, color: 'text-rose-600', bg: 'bg-rose-50' },
    { id: 'empyema', name_en: 'Thick Pus (Empyema)', name_th: 'หนองข้น (Empyema)', viscosity_cp: 15.0, density: 1.08, color: 'text-yellow-700', bg: 'bg-yellow-50' },
  ],
  elastancePresets: [
    { id: 'normal', name_en: 'Normal Expandable Lung', name_th: 'ปอดปกติขยายตัวได้ดี', elastance: 5.0, desc_en: 'Normal visceral pleura allows lung to re-expand easily. Minimal pressure drop per liter drained.', desc_th: 'ผิวปอดปกติขยายตัวแนบผนังอกได้ง่าย ความดันลบลดลงเพียงเล็กน้อยต่อน้ำ 1 ลิตร' },
    { id: 'borderline', name_en: 'Borderline Lung Entrapment', name_th: 'ปอดเริ่มติดตึงปานกลาง', elastance: 12.0, desc_en: 'Mild visceral thickening or partial loculation. Moderate pleural elastance.', desc_th: 'เยื่อหุ้มปอดเริ่มหนาตัว มีแรงต้านการขยายตัวปานกลาง' },
    { id: 'trapped', name_en: 'Trapped Lung (Malignant Peel)', name_th: 'ปอดติดแข็ง (Trapped Lung จากมะเร็ง)', elastance: 28.0, desc_en: 'Visceral pleural peel prevents expansion. Pressure drops >25 cmH₂O/L, high risk of Re-expansion Pulmonary Edema (RPE).', desc_th: 'พังผืดหนารัดปอดไม่ให้ขยาย ความดันลบดิ่งลงเร็วเกิน 25 cmH₂O/L เสี่ยงปอดบวมน้ำ RPE สูง' },
    { id: 'rigid', name_en: 'Rigid Fibrothorax / Mesothelioma', name_th: 'ปอดติดแข็งขั้นรุนแรง (Fibrothorax)', elastance: 45.0, desc_en: 'Severe calcified or tumor cortex. Extreme pressure drop with small drainage volumes.', desc_th: 'เปลือกพังผืดแข็งตัวหรือเนื้องอกหนา ความดันดิ่งลงมหาศาลแม้ดูดน้ำเพียงเล็กน้อย' },
  ]
};

const TRANSLATIONS = {
  en: {
    title: 'Intercostal Drainage Simulator',
    subtitle: 'Interactive 1-, 2-, and 3-Bottle UWSD Physics Lab, Clinical Indications & Bedside Troubleshooting',
    credit: 'Bedside UI Clinical Reference',
    discLink: 'Clinical Disclaimer & Sources',
    guideShort: {
      compare: 'Compare',
      indications: 'Systems',
      trouble: 'Leak / Fix',
      math: 'Equations',
      removal: 'Safety',
      pleurodesis: 'Pleurodesis',
      key: 'Key',
    },
    guideFull: {
      compare: '1 vs 2 vs 3 Compare',
      indications: 'Indications & Tube Size',
      trouble: 'Tube Leak & Troubleshooting',
      math: 'Pressure Equations',
      removal: 'Clamping & Removal',
      pleurodesis: 'Pleurodesis & MPE Protocol',
      key: 'Key',
    },
    sysLabel: 'Drainage System',
    presetsLabel: 'Quick Scenarios',
    resetBtn: 'Reset Defaults',
    liveBreath: 'Live Breathing',
    staticManual: 'Static Pressure',
    coughBtn: 'Simulate Cough (+20)',
    controlsTitle: 'Adjust Pressure & Water Heights',
    hSealLabel: 'Water Seal Depth (h_seal)',
    hFluidLabel: 'Drained Fluid Rise (Δh_fluid)',
    hSuctionLabel: 'Suction Control Water (h_suction)',
    wallSuctionLabel: 'Wall Vacuum Source (P_wall)',
    bottleHeightLabel: 'Bottle Position vs Chest',
    pExpLabel: 'End-Expiratory Pleural Pressure',
    pInspLabel: 'Inspiratory Pleural Pressure',
    pStaticLabel: 'Manual Pleural Pressure (P_pleural)',
    faultLabel: 'Simulated Fault / Condition',
    faultOpts: {
      none: 'None (Intact Circuit)',
      tube_leak: 'External Tube / Connector Leak',
      air_leak_bpf: 'Patient Air Leak (BPF)',
      kink_clot: 'Tube Kink / Clot Obstruction',
      dep_loop: 'Dependent Fluid Loop (+8 cmH₂O)',
    },
    wallOpts: {
      off_open: 'OFF — Port Vented to Room Air (Gravity)',
      off_closed: 'OFF — Tubing Still Plugged In (DANGER!)',
      low: 'LOW (−10 cmH₂O, < h_suction)',
      standard: 'STANDARD (−80 mmHg / −109 cmH₂O)',
      high: 'HIGH (−150 mmHg / −204 cmH₂O)',
    },
    clampBarTitle: 'Interactive Stepwise Clamp Test (Localize Air Leak)',
    clampNone: 'No Clamp (Open)',
    clampChest: '1. Clamp at Chest Wall',
    clampDistal: '2. Clamp Before Bottle',
    clampNoteChestStop: 'Bubbling STOPPED when clamped at chest wall → Leak originates from PATIENT (alveolar-pleural / BPF or migrated side-hole)! Release clamp immediately.',
    clampNoteChestCont: 'Bubbling CONTINUES despite clamping at chest wall → Leak is DISTAL in tubing, connectors, or bottle! Move clamp down to Bottle.',
    clampNoteDistalStop: 'Bubbling STOPPED when clamped before bottle → Leak is at a LOOSE CONNECTOR or CRACKED TUBING between chest & bottle! Tighten/tape junction.',
    calcTitle: 'Live Pressure Change Calculations',
    showSources: 'Show sources',
    hideSources: 'Hide sources',
    srcLabel: 'Source',
    srcUnknown: 'Unknown',
    srcNone: 'Not recorded',
    indicationsSectionTitle: 'System Architecture & Clinical Indications',
    indicationsSectionSub: 'Click any system card to load it in the simulator or inspect full details & sources.',
    loadInSim: 'Load in Simulator',
    detailsBtn: 'Details',
    indicationsHdr: 'Clinical Indications',
    limitationsHdr: 'Limitations & Risks',
    troubleSectionTitle: 'Bedside Troubleshooting & Tube Leak Guide',
    troubleSectionSub: 'Search or filter bedside problems. Click "Simulate" to see the exact physics live in the bottles.',
    searchPlaceholder: 'Search tube leak, tidaling, bubbling, clot...',
    searchPlaceholderShort: 'Search trouble...',
    catAll: 'All',
    catOpts: {
      leak: 'Tube / Air Leak',
      tidaling: 'Tidaling',
      suction: 'Suction',
      obstruction: 'Obstruction',
      emergency: 'Emergency',
    },
    simulateBtn: 'Simulate',
    causesHdr: 'Mechanism / Differential',
    stepsHdr: 'Bedside Action / Localization',
    neverDoHdr: 'Critical Pitfall (Never Do)',
    discTitle: 'Clinical Disclaimer',
    discPoints: [
      'Educational physics and bedside decision-support tool intended for clinicians, medical students, and nursing staff. Does not replace institutional protocols or specialist surgical judgment.',
      'Pressure values and bottle cross-sections (100 mL ≈ 1 cm fluid rise) represent standard clinical approximations for teaching multi-bottle mechanics.',
      'Never leave a chest tube clamped in a patient with a suspected or active air leak — tension pneumothorax develops rapidly.',
    ],
    discReviewed: 'Physiology & guidelines aligned with BTS Pleural Disease 2023, ATLS 10th Ed., and StatPearls.',
    refTitle: 'Verified Clinical Sources & References',
    refUsedFor: 'Used for',
    refUsed: {
      bts_guideline: 'Pneumothorax & pleural infection management, suction indications, massive hemothorax and removal thresholds',
      bts_statement: 'Chest drain insertion safety, triangle of safety, drain sizing, underwater seal depth (2 cm), and troubleshooting',
      zisis: '1-bottle, 2-bottle, and 3-bottle drainage mechanics, water-seal vs. wet-suction regulation',
      statpearls: 'Bedside tube care, tidaling, stepwise clamp test for air leaks, dependent loops, and disconnection management',
      atls: 'Massive hemothorax thoracotomy criteria (≥1,500 mL or ≥200 mL/hr) and 3-sided occlusive dressing for dislodgement',
      ests_digital: 'Digital air leak flow measurement in mL/min, objective chest drain removal threshold (< 30 mL/min), and dry suction regulation',
    },
    closeBtn: 'Close',
    legendTitle: 'Key to Symbols & Colours',
    legendSub: 'Consistent clinical colour coding used across the simulator',
    changelogTitle: 'Version History',
    waveTitle: 'Live Pressure & Tidaling Trace',
    wavePleural: 'P_pleural',
    waveCrack: 'P_crack threshold',
    waveTidaling: 'Tidaling (cm)',
    tabWaterSuction: 'Water & Suction',
    tabPatientFault: 'Breathing & Faults',
    dragHint: 'Tip: Click tubing to clamp, or drag water surfaces ↑↓ directly in the bottles.',
    setBaselineBtn: 'Set Baseline',
    baselineSetLbl: 'vs Standard',
    customBaselineLbl: 'vs Saved',
    gridView: 'Grid',
    listView: 'List',
    soundOn: 'Sound: Active',
    soundOff: 'Sound: Muted',
    soundHint: 'Toggle procedural bubbling & air leak SFX',
    digitalUnit: 'Digital / Dry Unit',
    airLeakFlow: 'Air Leak Flow',
    targetSuction: 'Target Suction',
    drySuctionDial: 'Dry Suction Dial (cmH₂O)',
    digitalScreen: 'Digital Air Leak Monitor',
    estsRemovalReady: 'Ready for Removal (Leak < 30 mL/min)',
    estsRemovalActive: 'Air Leak Active (Keep Drain)',
    bellowsExpanded: 'Suction OK (Bellows Expanded)',
    ventModeLabel: 'Ventilation Type',
    ventSpontaneous: 'Spontaneous',
    ventMechanical: 'Mechanical PPV',
    pipLabel: 'Peak Insp Pressure (PIP)',
    peepLabel: 'PEEP / End-Expiration',
    invertedTidaling: 'Inverted (PPV)',
    ppvWaveBadge: 'PPV Inverted Swing',
    ppvHint: 'Under positive pressure, water is pushed DOWN and bubbling emerges during INSPIRATION!',

    // Mobile Ergonomics & Switcher
    mobileTabVisual: 'Visual Simulator',
    mobileTabControls: 'Controls & Sliders',
    mobileTabMath: 'Pressure Math',
    quickControlsTitle: 'Mobile Quick Controls',
    viewBottlesBtn: 'View Bottles',
    miniHudTitle: 'LIVE STATUS',

    // Scenario Hub Categories
    catAllScenarios: 'ALL (16)',
    catProcedures: 'Pleurodesis & MPE',
    // Physics Lab Keys
    physTabHydro: 'Core Hydrostatics',
    physTabPoiseuille: 'Poiseuille Flow (r⁴ Law)',
    physTabElastance: 'Pleural Elastance (P/V Curve)',
    physTabSiphon: 'Gravity Siphon & Two-Phase',
    physTabUnits: 'Unit Transducer (cmH₂O / mmHg / kPa)',
    physLabTitle: 'Biophysical Equations & Hydrodynamic Lab',
    physLabSubtitle: 'Interactive biophysical models: Hagen-Poiseuille resistance, pleural elastance, siphon mechanics & unit transducer',
    physFrSelector: 'Catheter Gauge (French Size)',
    physFluidSelector: 'Pleural Fluid Type & Viscosity',
    physDeltaPLabel: 'Driving Pressure Gradient (ΔP)',
    physFlowRateLabel: 'Predicted Flow Rate (Q)',
    physRelResistLabel: 'Flow Resistance vs. 28 Fr Reference',
    physPoiseuillePearl: 'Clinical Pearl: Flow resistance is inversely proportional to radius to the 4th power (r⁴). An 8–10 Fr catheter has ~60–150× higher resistance than a 28 Fr tube for viscous fluids like blood or pus!',
    physElastancePresetLabel: 'Lung Expandability Pathology',
    physVolDrainedLabel: 'Fluid Volume Removed (ΔV)',
    physCurrentPplLabel: 'Calculated Pleural Pressure (P_pl)',
    physRpeAlert: 'CRITICAL RPE WARNING: Pleural pressure dropped below −20 cmH₂O! High risk of severe chest pain, vasovagal collapse, and fatal Re-expansion Pulmonary Edema (RPE). Cease fluid withdrawal immediately.',
    physRpeSafe: 'Operating within safe pleural pressure range (P_pl > −20 cmH₂O). Normal lung re-expansion.',
    physDropHeightLabel: 'Bed-to-Bottle Vertical Drop (Δh)',
    physVoidFractionLabel: 'Air Void Fraction (Two-Phase Mixture)',
    physSiphonSuctionLabel: 'Active Hydrostatic Siphon Suction',
    physSiphonDesc: 'A continuous liquid column generates spontaneous gravity suction up to the full drop height (−Δh). The entry of air bubbles breaks the liquid column, converting the system from a siphon into simple gravity drainage.',
    physUnitConverterTitle: 'Bedside Pressure Unit Transducer',
    physWallWarningTitle: 'CRITICAL EQUIPMENT TRAP: Wall Suction Regulator Calibration',
    physWallWarningDesc: 'Hospital wall vacuum regulators are typically calibrated in mmHg, while underwater drainage systems are calibrated in cmH₂O (1 mmHg = 1.36 cmH₂O). Setting wall suction to "−80 mmHg" produces −108.8 cmH₂O, which will violently boil a wet suction chamber! Conversely, setting wall suction to "−20 mmHg" delivers only −27.2 cmH₂O.',
    unitToggleLabel: 'Unit:',
    // v1.6 All-in-One UI Modernization Keys
    skinClassic: 'Classic Bottles',
    skinPleurevac: 'Pleur-evac (Commercial Unit)',
    actionDeckTitle: 'Bedside Clinical Action Deck',
    actionCough: 'Cough (+20)',
    actionValsalva: 'Valsalva (+30)',
    actionSniff: 'Deep Sniff (−25)',
    actionDrainFluid: 'Drain +200 mL',
    actionClampBrief: 'Stepwise Clamp',
    actionMilk: 'Milk Tubing',
    alarmTension: 'CRITICAL TENSION RISK: P_pl > +5 cmH₂O (Blocked/Clamped)',
    alarmRpe: 'RPE WARNING: P_pl < −20 cmH₂O (Trapped Lung / Re-expansion Edema)',
    alarmAirLeak: 'ACTIVE PATIENT AIR LEAK (Continuous Alveolar Bubbling)',
    hotspotSafetyTitle: 'Triangle of Safety (5th ICS)',
    hotspotSafetyDesc: 'Boundaries: Latissimus dorsi, Pectoralis major, 5th intercostal space (nipple line). Advance strictly over superior rib border.',
    hotspotVanTitle: 'Subcostal VAN Bundle Avoidance',
    hotspotVanDesc: 'Intercostal Vein, Artery, Nerve run along the inferior costal groove. Insertion over the top of the lower rib prevents severe hemothorax.',
    hotspotSentinelTitle: 'Chest Tube Sentinel Eye',
    hotspotSentinelDesc: 'The innermost drainage hole must reside completely within the pleural space. If migrated outside skin, it causes false air leaks or surgical emphysema.',
    pleuroTabIndications: 'Indications & Trapped Lung',
    pleuroTabAgents: 'Agents & Dosing',
    pleuroTabProtocol: 'Bedside Protocol & Clamping',
    pleuroTabIpc: 'Talc vs. IPC Matrix',
    pleuroSimDwell: 'Simulate 1-hr Clamping Dwell',
    pleuroSimTrapped: 'Simulate Trapped Lung Physics',
    pleuroEmergencyWarning: 'EMERGENCY ACTION: If patient develops shortness of breath or desaturation during clamping, UNCLAMP IMMEDIATELY!',
    catPhysio: 'Physiology',
    catVent: 'Ventilator PPV',
    catLeaks: 'Air Leaks',
    catHazards: 'Hazards & Traps',
    catDigital: 'Digital Drain',
    vignetteLabel: 'Clinical Vignette',
    expectedLabel: 'What to Observe',

    // Waveform Tools
    freezeTrace: 'Freeze Trace',
    resumeTrace: 'Resume Live',
    phaseInsp: 'Insp',
    phaseExp: 'Exp',
    caliperDelta: 'Pressure Swing (ΔP)',

    // ICU Bedside Monitor Strip
    monitorTitle: 'ICU BEDSIDE MONITOR',
    monitorPpl: 'Pleural Press (P_pl)',
    monitorSeal: 'Effective Seal',
    monitorTidaling: 'Tidaling Swing',
    monitorLeak: 'Air Leak / Bubbling',
    monitorSuction: 'Overhead Vacuum',

    // Anatomy & Safety
    anatomyTitle: 'Triangle of Safety (5th ICS)',
    anatomyDesc: 'Insert catheter over superior border of 5th rib to prevent damage to the intercostal neurovascular bundle (VAN).',
    sentinelEyeLabel: 'Sentinel Eye (Radiopaque Hole)',
  },
  th: {
    title: 'เครื่องจำลองระบบระบายช่องเยื่อหุ้มปอด (ICD)',
    subtitle: 'ห้องทดลองฟิสิกส์ระบบ 1, 2 และ 3 ขวด พร้อมคำนวณความดัน ข้อบ่งชี้ และการแก้ปัญหาข้างเตียง',
    credit: 'คู่มืออ้างอิงข้างเตียง (Bedside UI)',
    discLink: 'ข้อจำกัดความรับผิดชอบและแหล่งอ้างอิง',
    guideShort: {
      compare: 'เปรียบเทียบ',
      indications: 'ข้อบ่งชี้',
      trouble: 'แก้ปัญหา',
      math: 'สูตรคำนวณ',
      removal: 'ถอดสาย',
      key: 'สัญลักษณ์',
    },
    guideFull: {
      compare: 'เปรียบเทียบ 1-2-3 ขวด',
      indications: 'ข้อบ่งชี้และขนาดสาย',
      trouble: 'แก้ปัญหาสายรั่ว/ตัน',
      math: 'สมการความดัน',
      removal: 'การหนีบและถอดสาย',
      key: 'คำอธิบายสี',
    },
    sysLabel: 'เลือกระบบขวดระบาย',
    presetsLabel: 'สถานการณ์ตัวอย่าง',
    resetBtn: 'คืนค่ามาตรฐาน',
    liveBreath: 'หายใจอัตโนมัติ',
    staticManual: 'ปรับความดันคงที่',
    coughBtn: 'จำลองการไอ (+20)',
    controlsTitle: 'ปรับความดันและความสูงระดับน้ำ',
    hSealLabel: 'ความลึกท่อ Water Seal (h_seal)',
    hFluidLabel: 'ระดับสารน้ำที่ระบายเพิ่ม (Δh_fluid)',
    hSuctionLabel: 'ความลึกน้ำคุมแรงดูด (h_suction)',
    wallSuctionLabel: 'แหล่งแรงดูดจากผนัง (P_wall)',
    bottleHeightLabel: 'ระดับขวดเทียบกับหน้าอก',
    pExpLabel: 'ความดันช่องปอดช่วงหายใจออก',
    pInspLabel: 'ความดันช่องปอดช่วงหายใจเข้า',
    pStaticLabel: 'ความดันช่องเยื่อหุ้มปอด (P_pleural)',
    faultLabel: 'จำลองความผิดปกติของระบบ',
    faultOpts: {
      none: 'ปกติ (ระบบสมบูรณ์)',
      tube_leak: 'สาย/ข้อต่อภายนอกรั่ว (Tube Leak)',
      air_leak_bpf: 'ลมรั่วจากปอดผู้ป่วย (BPF)',
      kink_clot: 'สายพับงอ / ลิ่มเลือดอุดตัน',
      dep_loop: 'สายตกท้องช้างมีน้ำขัง (+8 cmH₂O)',
    },
    wallOpts: {
      off_open: 'ปิดแรงดูด — ถอดสายเปิดสู่บรรยากาศ (แรงโน้มถ่วง)',
      off_closed: 'ปิดแรงดูด — แต่เสียบสายคาไว้ (อันตราย! ระบบตัน)',
      low: 'เบาเกินไป (−10 cmH₂O, น้อยกว่า h_suction)',
      standard: 'มาตรฐาน (−80 mmHg / −109 cmH₂O)',
      high: 'แรงเกินไป (−150 mmHg / −204 cmH₂O)',
    },
    clampBarTitle: 'ทดสอบ Stepwise Clamp Test (หาตำแหน่งรอยรั่ว)',
    clampNone: 'ไม่หนีบ (เปิด)',
    clampChest: '1. หนีบชิดผนังอก',
    clampDistal: '2. หนีบก่อนเข้าขวด',
    clampNoteChestStop: 'ฟองอากาศหยุดทันทีเมื่อหนีบชิดผนังอก → ลมรั่วมาจาก "ตัวผู้ป่วย" (ปอดรั่ว/BPF หรือรูข้างสายเลื่อนหลุด)! รีบปลดแคลมป์ทันที',
    clampNoteChestCont: 'ฟองอากาศยังผุดต่อแม้หนีบชิดผนังอก → รอยรั่วอยู่ "ถัดลงมา" ในสาย ข้อต่อ หรือขวด! ลองเลื่อนไปหนีบก่อนเข้าขวด',
    clampNoteDistalStop: 'ฟองอากาศหยุดเมื่อหนีบก่อนเข้าขวด → รอยรั่วอยู่ที่ "ข้อต่อหลวมหรือสายแตก" ระหว่างอกกับขวด! ขันข้อต่อให้แน่น/พันเทป',
    calcTitle: 'การคำนวณความเปลี่ยนแปลงความดันแบบเรียลไทม์',
    showSources: 'แสดงแหล่งอ้างอิง',
    hideSources: 'ซ่อนแหล่งอ้างอิง',
    srcLabel: 'อ้างอิง',
    srcUnknown: 'ไม่ทราบข้อมูล',
    srcNone: 'ไม่มีบันทึก',
    indicationsSectionTitle: 'โครงสร้างและข้อบ่งชี้ของแต่ละระบบ',
    indicationsSectionSub: 'คลิกที่การ์ดเพื่อโหลดระบบเข้าสู่เครื่องจำลอง หรือกดดูรายละเอียดและแหล่งอ้างอิง',
    loadInSim: 'โหลดเข้าเครื่องจำลอง',
    detailsBtn: 'รายละเอียด',
    indicationsHdr: 'ข้อบ่งชี้ทางคลินิก',
    limitationsHdr: 'ข้อจำกัดและความเสี่ยง',
    troubleSectionTitle: 'การแก้ปัญหาเฉพาะหน้าและภาวะท่อรั่ว',
    troubleSectionSub: 'ค้นหาหรือกรองตามอาการ กดปุ่ม "จำลอง" เพื่อดูพฤติกรรมของน้ำและฟองอากาศจริงในขวด',
    searchPlaceholder: 'ค้นหา ท่อรั่ว, ฟองอากาศ, ไม่กระเพื่อม, ลิ่มเลือด...',
    searchPlaceholderShort: 'ค้นหาปัญหา...',
    catAll: 'ทั้งหมด',
    catOpts: {
      leak: 'ท่อรั่ว / ฟองอากาศ',
      tidaling: 'การกระเพื่อม (Tidaling)',
      suction: 'แรงดูด (Suction)',
      obstruction: 'สายอุดตัน / ตกท้องช้าง',
      emergency: 'ภาวะฉุกเฉิน',
    },
    simulateBtn: 'จำลอง',
    causesHdr: 'กลไก / การวินิจฉัยแยกโรค',
    stepsHdr: 'แนวทางแก้ไขข้างเตียง',
    neverDoHdr: 'ข้อห้ามสำคัญ (ห้ามทำเด็ดขาด)',
    discTitle: 'ข้อจำกัดความรับผิดชอบทางคลินิก',
    discPoints: [
      'เครื่องมือนี้จัดทำเพื่อการเรียนรู้ฟิสิกส์และการตัดสินใจข้างเตียงสำหรับแพทย์ นักศึกษาแพทย์ และพยาบาล ไม่ใช้แทนแนวทางปฏิบัติของโรงพยาบาลหรือดุลยพินิจของศัลยแพทย์',
      'ค่าความดันและสัดส่วนความสูงน้ำในขวด (100 มล. ≈ ระดับน้ำขึ้น 1 ซม.) เป็นค่าจำลองมาตรฐานเพื่อความเข้าใจกลไกหลายขวด',
      'ห้ามหนีบสาย ICD ทิ้งไว้ในผู้ป่วยที่สงสัยว่ามีลมรั่ว เพราะจะเกิด tension pneumothorax อย่างรวดเร็ว',
    ],
    discReviewed: 'อ้างอิงหลักสรีรวิทยาและแนวทาง BTS Pleural Disease 2023, ATLS 10th Ed. และ StatPearls',
    refTitle: 'แหล่งข้อมูลและเอกสารอ้างอิงที่ตรวจสอบแล้ว',
    refUsedFor: 'ใช้อ้างอิงสำหรับ',
    refUsed: {
      bts_guideline: 'การรักษา pneumothorax และ pleural infection ข้อบ่งชี้ suction เกณฑ์ massive hemothorax และเกณฑ์ถอดสาย',
      bts_statement: 'ความปลอดภัยในการใส่สาย ICD, triangle of safety, ขนาดสาย, ความลึก water seal (2 ซม.) และการแก้ปัญหา',
      zisis: 'กลไกระบบระบาย 1 ขวด 2 ขวด และ 3 ขวด เปรียบเทียบ water-seal กับ wet-suction',
      statpearls: 'การดูแลสายข้างเตียง, tidaling, การทำ stepwise clamp test หาท่อรั่ว, สายตกท้องช้าง และกรณีข้อต่อหลุด',
      atls: 'เกณฑ์ผ่าตัด massive hemothorax (≥1,500 มล. หรือ ≥200 มล./ชม.) และปิดแผล 3 ด้านเมื่อสายหลุด',
      ests_digital: 'การวัดอัตราลมรั่วแบบตัวเลข (มล./นาที), เกณฑ์ถอดสายระบายตามมาตรฐานสากล (< 30 มล./นาที) และระบบควบคุมแรงดูดแบบแห้ง',
    },
    closeBtn: 'ปิด',
    legendTitle: 'คำอธิบายสีและสัญลักษณ์',
    legendSub: 'ระบบสีมาตรฐาน (หนึ่งสี หนึ่งความหมาย) ตามหลัก Bedside UI',
    changelogTitle: 'ประวัติการพัฒนาเวอร์ชัน',
    waveTitle: 'กราฟความดันและน้ำกระเพื่อมเรียลไทม์',
    wavePleural: 'P_pleural',
    waveCrack: 'เส้นเปิดลิ้น P_crack',
    waveTidaling: 'Tidaling (ซม.)',
    tabWaterSuction: 'ระดับน้ำและแรงดูด',
    tabPatientFault: 'การหายใจและรอยรั่ว',
    dragHint: 'เคล็ดลับ: คลิกที่สายเพื่อทดสอบหนีบ หรือลากผิวน้ำในขวดขึ้น-ลงโดยตรง',
    setBaselineBtn: 'บันทึกค่าเริ่มต้น',
    baselineSetLbl: 'เทียบมาตรฐาน',
    customBaselineLbl: 'เทียบค่าที่บันทึก',
    gridView: 'การ์ด',
    listView: 'รายการ',
    soundOn: 'เสียง: เปิด',
    soundOff: 'เสียง: ปิด',
    soundHint: 'เปิด/ปิดเสียงฟองอากาศและลมรั่วจำลอง',
    digitalUnit: 'ดิจิทัล / ปรับแรงดูดแห้ง',
    airLeakFlow: 'อัตราลมรั่ว (Air Leak Flow)',
    targetSuction: 'แรงดูดที่ตั้งไว้',
    drySuctionDial: 'แป้นบิดแรงดูดแห้ง (cmH₂O)',
    digitalScreen: 'หน้าจอดิจิทัลวัดลมรั่ว',
    estsRemovalReady: 'พร้อมถอดสายระบาย (ลมรั่ว < 30 มล./นาที)',
    estsRemovalActive: 'ยังมีลมรั่ว (ใส่สายระบายต่อ)',
    bellowsExpanded: 'แรงดูดปกติ (สปริงขยายตัว)',
    ventModeLabel: 'ประเภทการช่วยหายใจ',
    ventSpontaneous: 'หายใจเอง',
    ventMechanical: 'เครื่องช่วยหายใจ (PPV)',
    pipLabel: 'ความดันช่วงหายใจเข้า (PIP)',
    peepLabel: 'PEEP / หายใจออก',
    invertedTidaling: 'สลับทิศ (PPV)',
    ppvWaveBadge: 'ความดันบวก (PPV)',
    ppvHint: 'แรงดันบวกดันน้ำลดลง และฟองอากาศจะผุดช่วงหายใจเข้า (Inspiration)!',

    // Mobile Ergonomics & Switcher
    mobileTabVisual: 'ภาพจำลองสายระบาย',
    mobileTabControls: 'แผงควบคุม & สไลเดอร์',
    mobileTabMath: 'คำนวณความดัน & เดลต้า',
    quickControlsTitle: 'แถบปรับด่วนบนมือถือ',
    viewBottlesBtn: 'ดูขวดระบาย',
    miniHudTitle: 'สถานะแบบเรียลไทม์',

    // Scenario Hub Categories
    catAllScenarios: 'ทั้งหมด (16)',
    catProcedures: 'Pleurodesis & หัตถการ',
    // Physics Lab Keys
    physTabHydro: 'อุทกสถิต & ลิ้นเปิด',
    physTabPoiseuille: 'กฎปัวซอยย์ (กฎ r⁴)',
    physTabElastance: 'ความยืดหยุ่นปอด (กราฟ P/V)',
    physTabSiphon: 'กาลักน้ำ & การไหล 2 สถานะ',
    physTabUnits: 'แปลงหน่วยวัดความดัน',
    physLabTitle: 'ห้องทดลองสมการชีวฟิสิกส์ & ชลศาสตร์',
    physLabSubtitle: 'แบบจำลองฟิสิกส์แบบโต้ตอบ: แรงต้านปัวซอยย์ (r⁴), กราฟความยืดหยุ่นปอดติดแข็ง, กาลักน้ำ และแปลงหน่วยความดัน',
    physFrSelector: 'ขนาดสายระบาย (French Size)',
    physFluidSelector: 'ชนิดสารน้ำในช่องอก & ความหนืด (η)',
    physDeltaPLabel: 'ความต่างแรงดันขับเคลื่อน (ΔP)',
    physFlowRateLabel: 'อัตราการไหลที่คำนวณได้ (Q)',
    physRelResistLabel: 'แรงต้านเปรียบเทียบกับสายมาตรฐาน 28 Fr',
    physPoiseuillePearl: 'ข้อคิดทางคลินิก: แรงต้านการไหลแปรผกผันกับรัศมียกกำลัง 4 (r⁴) ทำให้สายขนาดเล็ก 8–10 Fr มีแรงต้านสูงกว่าสาย 28 Fr ถึง 60–150 เท่า หากเป็นของเหลวหนืดเช่นเลือดสดหรือหนอง!',
    physElastancePresetLabel: 'พยาธิสภาพการขยายตัวของปอด',
    physVolDrainedLabel: 'ปริมาตรสารน้ำที่ดูดออก (ΔV)',
    physCurrentPplLabel: 'ความดันช่องเยื่อหุ้มปอดที่คำนวณได้ (P_pl)',
    physRpeAlert: 'คำเตือนอันตราย RPE: ความดันช่องอกลดต่ำกว่า −20 cmH₂O! เสี่ยงเกิดอาการเจ็บแน่นหน้าอกรุนแรง ภาวะช็อก และน้ำท่วมปอดเฉียบพลันจากการขยายตัวเร็วเกินไป (Re-expansion Pulmonary Edema) ให้หยุดดูดน้ำทันที',
    physRpeSafe: 'อยู่ในช่วงความดันที่ปลอดภัย (P_pl > −20 cmH₂O) ปอดสามารถขยายตัวได้ตามปกติ',
    physDropHeightLabel: 'ระยะต่างระดับเตียงถึงขวดระบาย (Δh)',
    physVoidFractionLabel: 'สัดส่วนฟองอากาศในสาย (Air Void Fraction)',
    physSiphonSuctionLabel: 'แรงดูดกาลักน้ำตามธรรมชาติ (Siphon Suction)',
    physSiphonDesc: 'เมื่อสายระบายเต็มไปด้วยน้ำ จะเกิดแรงดูดกาลักน้ำตามความสูงแนวดิ่ง (−Δh) แต่เมื่อมีฟองอากาศแทรกเข้ามา ลำน้ำจะขาดตอน ทำให้แรงดูดกาลักน้ำยุบตัวลงเหลือเพียงการไหลตามแรงโน้มถ่วงธรรมดา',
    physUnitConverterTitle: 'เครื่องมือแปลงหน่วยความดันข้างเตียง',
    physWallWarningTitle: 'กับดักอันตรายข้างเตียง: หน้าปัดแรงดูดผนัง (mmHg vs cmH₂O)',
    physWallWarningDesc: 'เกจปรับแรงดูดที่ผนังโรงพยาบาลมักใช้หน่วย mmHg ขณะที่ระบบขวดระบายทรวงอกใช้หน่วย cmH₂O (1 mmHg = 1.36 cmH₂O) การเปิดแรงดูดผนังที่ "−80 mmHg" จะมีค่าสูงถึง −108.8 cmH₂O ซึ่งจะทำให้ขวดที่ 3 เดือดพล่านรุนแรงและน้ำระเหยหมดอย่างรวดเร็ว!',
    unitToggleLabel: 'หน่วย:',
    // v1.6 All-in-One UI Modernization Keys
    skinClassic: 'ระบบขวดแก้วดั้งเดิม',
    skinPleurevac: 'กล่องรวม 3 ช่อง (Pleur-evac)',
    actionDeckTitle: 'แผงปฏิบัติการด่วนข้างเตียง',
    actionCough: 'ไอแรง (+20)',
    actionValsalva: 'เบ่ง Valsalva (+30)',
    actionSniff: 'สูดลึกสุด (−25)',
    actionDrainFluid: 'ระบายเลือด/น้ำ +200 มล.',
    actionClampBrief: 'หนีบสายทดสอบ',
    actionMilk: 'รูดสายไล่ลิ่มเลือด',
    alarmTension: 'วิกฤต: เสี่ยงเกิด Tension Pneumothorax (ท่อตัน/หนีบสาย)',
    alarmRpe: 'คำเตือน RPE: ความดันช่องอกติดลบวิกฤต (P_pl < −20 cmH₂O)',
    alarmAirLeak: 'ตรวจพบลมรั่วจากปอดต่อเนื่อง (Bronchopleural Air Leak)',
    hotspotSafetyTitle: 'สามเหลี่ยมความปลอดภัย (ช่องซี่โครงที่ 5)',
    hotspotSafetyDesc: 'ขอบเขต: กล้ามเนื้อ Latissimus dorsi, Pectoralis major, ช่องซี่โครงที่ 5 ชิดขอบบนของกระดูกซี่โครงล่างเสมอ',
    hotspotVanTitle: 'แนวหลอดเลือดและเส้นประสาทใต้ซี่โครง (VAN)',
    hotspotVanDesc: 'หลอดเลือดดำ หลอดเลือดแดง และเส้นประสาทวิ่งชิดขอบล่างของซี่โครง การใส่สายชิดขอบบนซี่โครงล่างป้องกันการฉีกขาดของเส้นเลือดใหญ่',
    hotspotSentinelTitle: 'รูระบายข้างสาย (Sentinel Eye)',
    hotspotSentinelDesc: 'รูระบายข้างสุดท้ายต้องอยู่ลึกในช่องอกเสมอ หากเลื่อนหลุดออกมานอกผนังอกจะดูดลมห้องเข้ามาหรือทำให้เกิดลมใต้ผิวหนัง',
    pleuroTabIndications: 'ข้อบ่งชี้ & ปอดติดแข็ง',
    pleuroTabAgents: 'สารระคายเคือง & ขนาดยา',
    pleuroTabProtocol: 'ขั้นตอนการหนีบสาย & เฝ้าระวัง',
    pleuroTabIpc: 'เปรียบเทียบ Talc vs สาย IPC',
    pleuroSimDwell: 'จำลองช่วงหนีบสาย 1 ชม.',
    pleuroSimTrapped: 'จำลองสรีรวิทยาปอดติดแข็ง',
    pleuroEmergencyWarning: 'ข้อควรระวังฉุกเฉิน: หากผู้ป่วยมีอาการเหนื่อย แน่นหน้าอก หรือระดับออกซิเจนลดลงขณะหนีบสาย ให้ปลดแคลมป์ทันที!',
    catPhysio: 'สรีรวิทยาปกติ',
    catVent: 'เครื่องช่วยหายใจ PPV',
    catLeaks: 'ลมรั่วในระบบ',
    catHazards: 'อันตราย & กับดัก',
    catDigital: 'ระบบดิจิทัล',
    vignetteLabel: 'โจทย์ทางคลินิก',
    expectedLabel: 'สิ่งที่ควรสังเกตข้างเตียง',

    // Waveform Tools
    freezeTrace: 'หยุดภาพคลื่น',
    resumeTrace: 'คลื่นสดเรียลไทม์',
    phaseInsp: 'หายใจเข้า',
    phaseExp: 'หายใจออก',
    caliperDelta: 'ช่วงกว้างการกระเพื่อม (ΔP)',

    // ICU Bedside Monitor Strip
    monitorTitle: 'สัญญาณชีพสายระบายข้างเตียง (ICU MONITOR)',
    monitorPpl: 'ความดันช่องอก (P_pl)',
    monitorSeal: 'Water Seal จริง',
    monitorTidaling: 'ช่วงกระเพื่อม (Tidaling)',
    monitorLeak: 'ลมรั่ว / ฟองผุด',
    monitorSuction: 'แรงดูดสุญญากาศ',

    // Anatomy & Safety
    anatomyTitle: 'สามเหลี่ยมความปลอดภัย (ช่องซี่โครงที่ 5)',
    anatomyDesc: 'ใส่สายระบายชิดขอบบนของกระดูกซี่โครงที่ 5 เพื่อป้องกันอันตรายต่อเส้นเลือดและเส้นประสาทใต้ซี่โครง (VAN)',
    sentinelEyeLabel: 'รูระบายข้าง (Sentinel Eye)',
  },
};
