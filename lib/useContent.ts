import en from "../content/en.json"
import sv from "../content/sv.json"

export function getContent(lang: "en" | "sv") {
  return lang === "sv" ? sv : en
}