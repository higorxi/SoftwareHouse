import Link from 'next/link'
import { Button } from "@/components/ui/button"
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { ArrowRight, Code, Layout, FileText, Rocket, Store, CheckCircle, Clock, DollarSign, Users } from 'lucide-react'

export default function Home() {
  return (
    <div className="space-y-16">
      <section className="text-center py-20 bg-gradient-to-r from-primary to-primary-foreground text-white">
        <h1 className="text-5xl font-bold mb-6">Transforme Sua Presença Online</h1>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Soluções web personalizadas e prontas para uso que impulsionam seu negócio no mundo digital.
          Desde sites elegantes até APIs robustas, nós temos o que você precisa.
        </p>
        <div className="flex justify-center gap-4">
          <Link href="/loja">
            <Button size="lg" variant="secondary">
              Explorar Soluções Prontas
            </Button>
          </Link>
          <Link href="/contato">
            <Button size="lg">
              Solicitar Orçamento <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">Por Que Escolher Nossos Serviços?</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <CheckCircle className="mr-2 text-primary" />
                Qualidade Garantida
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Desenvolvemos soluções de alta qualidade, testadas e otimizadas para performance e segurança.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Clock className="mr-2 text-primary" />
                Entrega Rápida
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Nossas soluções prontas permitem que você lance seu projeto rapidamente, ganhando tempo precioso no mercado.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <DollarSign className="mr-2 text-primary" />
                Custo-Benefício
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Oferecemos soluções acessíveis sem comprometer a qualidade, ajudando você a maximizar seu investimento.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Users className="mr-2 text-primary" />
                Suporte Dedicado
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Nossa equipe está sempre disponível para ajudar, desde a escolha da solução até o suporte pós-lançamento.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">Nossos Serviços</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <Card>
              <CardHeader>
                <CardTitle><Layout className="inline-block mr-2 text-primary" /> Sites Personalizados</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Websites responsivos e modernos que refletem a identidade única da sua marca.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle><Code className="inline-block mr-2 text-primary" /> APIs Robustas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>APIs escaláveis para integração perfeita de sistemas e aplicativos.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle><FileText className="inline-block mr-2 text-primary" /> Documentações Claras</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Documentações técnicas abrangentes para facilitar o uso e manutenção.</CardDescription>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle><Rocket className="inline-block mr-2 text-primary" /> Landing Pages Otimizadas</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>Landing pages de alta conversão para impulsionar suas campanhas de marketing.</CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section className="container mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold mb-8">Soluções Prontas para Acelerar Seu Negócio</h2>
        <p className="text-xl mb-8 max-w-2xl mx-auto">
          Descubra nossa coleção de sites prontos para uso, perfeitos para diversos segmentos e necessidades.
          Lance seu projeto em tempo recorde sem comprometer a qualidade.
        </p>
        <Link href="/loja">
          <Button size="lg">
            <Store className="mr-2" />
            Explorar Soluções Prontas
          </Button>
        </Link>
      </section>

      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Transforme Sua Visão em Realidade</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Seja você um empreendedor iniciante ou uma empresa estabelecida, 
            nossas soluções web são projetadas para impulsionar seu sucesso online. 
            Não perca mais tempo e oportunidades - comece a construir sua presença digital hoje!
          </p>
          <Link href="/contato">
            <Button size="lg" variant="secondary">
              Comece Seu Projeto Agora <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      <section className="container mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold mb-8 text-center">O Que Nossos Clientes Dizem</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Maria Silva",
              company: "Moda Elegante",
              testimonial: "A solução de e-commerce que adquirimos superou nossas expectativas. Nossas vendas aumentaram em 150% no primeiro mês!"
            },
            {
              name: "João Santos",
              company: "Tech Inovadora",
              testimonial: "A API desenvolvida pela equipe é robusta e escalável. Conseguimos integrar todos os nossos sistemas sem problemas."
            },
            {
              name: "Ana Oliveira",
              company: "Viagens Incríveis",
              testimonial: "Nosso novo site de viagens é lindo e funcional. Os clientes adoram a facilidade de uso e as reservas online dispararam!"
            }
          ].map((testimonial, index) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <p className="italic mb-4">&quot;{testimonial.testimonial}&quot;</p>
                <p className="font-semibold">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.company}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      <section className="bg-muted py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Pronto para Transformar Sua Presença Online?</h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Não espere mais para ter o site ou a solução web que seu negócio merece. 
            Entre em contato conosco hoje e descubra como podemos ajudar você a alcançar seus objetivos online.
          </p>
          <Link href="/contato">
            <Button size="lg">
              Solicite uma Consulta Gratuita <ArrowRight className="ml-2" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  )
}

