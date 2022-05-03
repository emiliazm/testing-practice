function capitalize(string) {
  return typeof string === "string" ?
  string.charAt(0).toUpperCase().concat(string.substring(1, string.length)) : string
}

module.exports = capitalize;