export const getLanguagesStr = (languages: string[]) => {
  let str = ""
  languages.forEach((el: any) => {
    el.charAt(0).toUpperCase()
    str += `${el}, `
  })
  str = str.slice(0, -2)
  return str
}
