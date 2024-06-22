

const fetcher = url => fetch(url).then(res => res.json());

export default function fetch(req, res) {
  res.status(200).json({ messeage: "学ぶ。をちゃんと" })
}