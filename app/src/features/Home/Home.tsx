import Section from "@/components/layout/Section"
import useHome from "@/lib/hooks/useHome"

const Home = () => {
  const { data, error, isLoading } = useHome()

  const content = isLoading
    ? <div>Loading...</div>
    : data?.map((paragraph, id) => (
      <p className="my-10 font-inter font-light" key={id}>
        {paragraph}
      </p>
    ))

  return (
    <Section>
      <h1>Home</h1>
      <p className="my-2 font-inter font-light">
        This is the Home page
      </p>

      {error}
      {content}
    </Section>
  )
}

export default Home
