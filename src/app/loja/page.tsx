import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardContent, CardFooter } from "@/components/ui/card"

const solutions = [
  {
    id: 1,
    title: "E-commerce de Moda",
    description: "Loja online moderna para marcas de moda",
    image: "/placeholder.svg?height=200&width=300",
    price: 1499,
    category: "E-commerce"
  },
  {
    id: 2,
    title: "Blog de Viagens",
    description: "Site responsivo para compartilhar aventuras",
    image: "/placeholder.svg?height=200&width=300",
    price: 999,
    category: "Blog"
  },
  {
    id: 3,
    title: "Portfólio de Fotógrafo",
    description: "Showcase elegante para fotógrafos profissionais",
    image: "/placeholder.svg?height=200&width=300",
    price: 1299,
    category: "Portfólio"
  },
  {
    id: 4,
    title: "Site de Restaurante",
    description: "Apresente seu menu e aceite reservas online",
    image: "/placeholder.svg?height=200&width=300",
    price: 1199,
    category: "Serviços"
  },
  {
    id: 5,
    title: "Landing Page de Produto",
    description: "Página de conversão para lançamentos de produtos",
    image: "/placeholder.svg?height=200&width=300",
    price: 799,
    category: "Landing Page"
  },
  {
    id: 6,
    title: "Site de Clínica Médica",
    description: "Presença online profissional para área da saúde",
    image: "/placeholder.svg?height=200&width=300",
    price: 1399,
    category: "Serviços"
  },
]

export default function LojaSolucoes() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Soluções Prontas</h1>
        <p className="text-xl mb-8">Escolha entre nossas soluções pré-desenvolvidas para diversos segmentos e comece seu projeto rapidamente.</p>
      </section>

      <section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {solutions.map((solution) => (
            <Card key={solution.id} className="flex flex-col">
              <CardHeader>
                <Image
                  src={solution.image}
                  alt={solution.title}
                  width={300}
                  height={200}
                  className="rounded-t-lg object-cover w-full"
                />
              </CardHeader>
              <CardContent className="flex-grow">
                <CardTitle className="mb-2">{solution.title}</CardTitle>
                <p className="text-muted-foreground mb-2">{solution.description}</p>
                <p className="font-semibold">Categoria: {solution.category}</p>
              </CardContent>
              <CardFooter className="flex justify-between items-center">
                <span className="text-lg font-bold">R$ {solution.price}</span>
                <Link href={`/loja/${solution.id}`}>
                  <Button>Ver Detalhes</Button>
                </Link>
              </CardFooter>
            </Card>
          ))}
        </div>
      </section>

      <section className="text-center">
        <h2 className="text-3xl font-bold mb-4">Não encontrou o que procura?</h2>
        <p className="text-xl mb-8">Podemos customizar qualquer solução ou criar algo totalmente novo para você.</p>
        <Link href="/contato">
          <Button size="lg">Entre em Contato</Button>
        </Link>
      </section>
    </div>
  )
}

