import logo from "@/assets/logo.png";

export const PPF_CATEGORY_LABELS = {
  "camio-tpu-clear-gloss": "CAMIO TPU Clear Gloss",
  "camio-tpu-black-gloss": "CAMIO TPU Black Gloss",
  "camio-tpu-clear-matte": "CAMIO TPU Clear Matte",
  "camio-tpu-black-matte": "CAMIO TPU Black Matte",
  "camio-tpu-gloss-8yr": "CAMIO TPU Gloss 8 Years",
  "camio-tpu-color-ppf": "CAMIO TPU Color PPF",
  "body-guard-tpu-3yr": "Body Guard TPU 3 Years",
};

export const getWarrantyYears = (ppfCategory = "") => {
  if (ppfCategory === "camio-tpu-gloss-8yr") return 8;
  if (ppfCategory === "body-guard-tpu-3yr") return 3;
  if (ppfCategory.includes("tpu")) return 5;
  return 0;
};

export const getWarrantyDuration = (ppfCategory) => {
  const years = getWarrantyYears(ppfCategory);
  return years ? `${years} years` : "Not Available";
};

const formatDate = (date) =>
  new Date(date).toLocaleDateString("en-IN", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

const getExpiryDate = (startDate, ppfCategory) => {
  const years = getWarrantyYears(ppfCategory);
  if (!years) return null;
  const expiry = new Date(startDate);
  expiry.setFullYear(expiry.getFullYear() + years);
  return expiry;
};

const loadImage = (src) =>
  new Promise((resolve) => {
    const img = new window.Image();
    img.crossOrigin = "anonymous";
    img.onload = () => resolve(img);
    img.onerror = () => resolve(null);
    img.src = src;
  });

const truncate = (ctx, text, maxWidth) => {
  const value = String(text ?? "-").trim() || "-";
  if (ctx.measureText(value).width <= maxWidth) return value;
  let truncated = value;
  while (truncated.length > 1 && ctx.measureText(`${truncated}…`).width > maxWidth) {
    truncated = truncated.slice(0, -1);
  }
  return `${truncated}…`;
};

const FONT_STACK = '"Helvetica Neue", Helvetica, Arial, sans-serif';
const COLORS = {
  background: "#0E1116",
  accent: "#FFBB4E",
  label: "#8A8F98",
  value: "#F2F4F7",
  divider: "#242A33",
};

const drawLabel = (ctx, text, x, y) => {
  ctx.font = `600 11px ${FONT_STACK}`;
  ctx.fillStyle = COLORS.label;
  if ("letterSpacing" in ctx) ctx.letterSpacing = "1.2px";
  ctx.fillText(text.toUpperCase(), x, y);
  if ("letterSpacing" in ctx) ctx.letterSpacing = "0px";
};

const drawValue = (ctx, text, x, y, maxWidth) => {
  ctx.font = `500 17px ${FONT_STACK}`;
  ctx.fillStyle = COLORS.value;
  ctx.fillText(truncate(ctx, text, maxWidth), x, y);
};

/**
 * Renders the e-warranty card to a PNG blob.
 */
export async function renderWarrantyCard(warranty) {
  const W = 1000;
  const H = 640;
  const SCALE = 2;

  const canvas = document.createElement("canvas");
  canvas.width = W * SCALE;
  canvas.height = H * SCALE;
  const ctx = canvas.getContext("2d");
  ctx.scale(SCALE, SCALE);
  ctx.textBaseline = "alphabetic";

  const createdAt = warranty.createdAt ? new Date(warranty.createdAt) : new Date();
  const expiryDate = getExpiryDate(createdAt, warranty.ppfCategory);

  // Background + accent border
  ctx.fillStyle = COLORS.background;
  ctx.fillRect(0, 0, W, H);
  ctx.strokeStyle = COLORS.accent;
  ctx.lineWidth = 2;
  ctx.strokeRect(24, 24, W - 48, H - 48);

  // Header
  const logoImage = await loadImage(typeof logo === "string" ? logo : logo.src);
  if (logoImage) {
    const logoHeight = 46;
    const logoWidth = (logoImage.width / logoImage.height) * logoHeight;
    ctx.drawImage(logoImage, 56, 50, logoWidth, logoHeight);
  } else {
    ctx.font = `700 30px ${FONT_STACK}`;
    ctx.fillStyle = COLORS.accent;
    ctx.fillText("CAMIO", 56, 84);
  }

  ctx.textAlign = "right";
  ctx.font = `700 22px ${FONT_STACK}`;
  ctx.fillStyle = COLORS.accent;
  ctx.fillText("E-WARRANTY CERTIFICATE", W - 56, 74);
  ctx.font = `400 13px ${FONT_STACK}`;
  ctx.fillStyle = COLORS.label;
  ctx.fillText("Camio Paint Protection Film", W - 56, 96);
  ctx.textAlign = "left";

  ctx.strokeStyle = COLORS.divider;
  ctx.lineWidth = 1;
  ctx.beginPath();
  ctx.moveTo(56, 124);
  ctx.lineTo(W - 56, 124);
  ctx.stroke();

  // Warranty ID
  drawLabel(ctx, "Warranty ID", 56, 158);
  ctx.font = `700 32px ${FONT_STACK}`;
  ctx.fillStyle = COLORS.accent;
  ctx.fillText(warranty.warrantyId || "-", 56, 194);

  // Status pill
  const statusText = (warranty.status || "PENDING").toUpperCase();
  ctx.font = `700 12px ${FONT_STACK}`;
  const pillWidth = ctx.measureText(statusText).width + 32;
  const pillX = W - 56 - pillWidth;
  ctx.fillStyle = COLORS.accent;
  if (ctx.roundRect) {
    ctx.beginPath();
    ctx.roundRect(pillX, 162, pillWidth, 32, 16);
    ctx.fill();
  } else {
    ctx.fillRect(pillX, 162, pillWidth, 32);
  }
  ctx.fillStyle = COLORS.background;
  ctx.fillText(statusText, pillX + 16, 183);

  // Field grid
  const rows = [
    ["Customer Name", warranty.customerName, "Phone Number", warranty.phoneNumber],
    ["Car Number", warranty.carNumber, "Chassis Number", warranty.chassisNumber],
    [
      "Camio Roll Code",
      warranty.camioRollCode,
      "PPF Category",
      PPF_CATEGORY_LABELS[warranty.ppfCategory] || warranty.ppfCategory,
    ],
    [
      "Warranty Period",
      getWarrantyDuration(warranty.ppfCategory),
      "Valid Till",
      expiryDate ? formatDate(expiryDate) : "Not Available",
    ],
    ["Detailer Studio", warranty.detailerStudioName, "Location", warranty.location],
  ];

  const colX = [56, 530];
  const colWidth = 414;
  rows.forEach(([leftLabel, leftValue, rightLabel, rightValue], index) => {
    const y = 244 + index * 68;
    drawLabel(ctx, leftLabel, colX[0], y);
    drawValue(ctx, leftValue, colX[0], y + 26, colWidth);
    drawLabel(ctx, rightLabel, colX[1], y);
    drawValue(ctx, rightValue, colX[1], y + 26, colWidth);
  });

  // Footer
  ctx.strokeStyle = COLORS.divider;
  ctx.beginPath();
  ctx.moveTo(56, 566);
  ctx.lineTo(W - 56, 566);
  ctx.stroke();

  ctx.font = `400 12px ${FONT_STACK}`;
  ctx.fillStyle = COLORS.label;
  ctx.fillText(`Registered on ${formatDate(createdAt)}`, 56, 592);
  ctx.fillText(
    "Keep this card safe. Warranty is non-transferable and subject to Camio PPF warranty policies.",
    56,
    610
  );

  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (blob) resolve(blob);
      else reject(new Error("Failed to generate warranty card"));
    }, "image/png");
  });
}

/**
 * Renders the card and triggers a browser download.
 */
export async function downloadWarrantyCard(warranty) {
  const blob = await renderWarrantyCard(warranty);
  const url = URL.createObjectURL(blob);
  const link = document.createElement("a");
  link.href = url;
  link.download = `Camio-Warranty-${warranty.warrantyId || "card"}.png`;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  setTimeout(() => URL.revokeObjectURL(url), 1000);
}
