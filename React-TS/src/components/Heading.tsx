import { ReactElement } from "react"
import { Section } from "./Section"
import { Counter } from "./Counter"

type HeadingProps = {
  title: string
}

const Heading = ({ title }: HeadingProps): ReactElement => {
  return (
    <>
      <h1>{title}</h1>
    </>
  )
}

export default Heading