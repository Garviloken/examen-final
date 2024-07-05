import Link from "next/link"

const NotFound = () => {
  return (
    <div>
      <h2>A PAS TROUVER...</h2>
      <p>Déso, la page n&apos;existe pas </p>
      <Link href="/">Retourne à L&apos;ACCEUIL</Link>
    </div>
  )
}

export default NotFound