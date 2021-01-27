export default function formatCurrenc(num) {
  return "$" + Number(num.toFixed(1)).toLocaleString() + "";
}
