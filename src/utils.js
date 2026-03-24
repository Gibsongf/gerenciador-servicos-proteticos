import { format } from "date-fns";

export function removeDuplicate(arr) {
  const lstRepeat = [];
  function remove(obj) {
    if (!lstRepeat.includes(obj.nome)) {
      lstRepeat.push(obj.nome);
      return obj;
    }
  }
  return arr.filter(remove);
}

export function todayDate() {
  return format(new Date(), "yyyy-MM-dd");
}
