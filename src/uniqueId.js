var number = 0
export default function uniqueId(id){
  number++
  return number + '-' + id
}
