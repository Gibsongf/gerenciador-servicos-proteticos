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
