import { format } from "date-fns";

export function removeDuplicate(arr) {
  const lstRepeat = [];
  function remove(obj) {
    if (Object.values(obj)) {
      if (!lstRepeat.includes(obj.nome)) {
        lstRepeat.push(obj.nome);
        return obj;
      }
    }
  }
  return arr.filter(remove);
}

export function todayDate() {
  return format(new Date(), "yyyy-MM-dd");
}

export function downloadExcelAction(blob, fileName) {
  const downloadLink = document.createElement("a");
  downloadLink.download = fileName;
  downloadLink.href = URL.createObjectURL(blob);
  downloadLink.click();
  URL.revokeObjectURL(downloadLink.href);
}
