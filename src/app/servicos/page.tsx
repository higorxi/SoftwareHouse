import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"
import { Layout, Code, FileText, Rocket, Edit, Upload, HeadphonesIcon } from 'lucide-react'

export default function ServicosPage() {
  return (
    <div className="space-y-12">
      <section className="text-center">
        <h1 className="text-4xl font-bold mb-4">Nossos Serviços</h1>
        <p className="text-xl mb-8">Oferecemos uma gama completa de soluções web para atender às suas necessidades.</p>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Layout className="mr-2" />
              Sites
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Desenvolvemos sites responsivos e modernos, otimizados para SEO e com foco na experiência do usuário.
              Nossas soluções são personalizáveis e podem ser fornecidas como white label.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Code className="mr-2" />
              APIs
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Criamos APIs robustas e escaláveis para integração de sistemas, seguindo as melhores práticas de
              segurança e performance. Oferecemos soluções RESTful e GraphQL.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <FileText className="mr-2" />
              Documentações
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Elaboramos documentações técnicas claras e completas para seus projetos, incluindo guias de usuário,
              documentação de API e wikis internas.
            </CardDescription>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle className="flex items-center">
              <Rocket className="mr-2" />
              Landing Pages
            </CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>
              Desenvolvemos landing pages otimizadas para conversão, com design atraente e focado em resultados.
              Ideal para campanhas de marketing e lançamentos de produtos.
            </CardDescription>
          </CardContent>
        </Card>
      </section>

      <section>
        <h2 className="text-3xl font-bold mb-8">Serviços Adicionais</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Edit className="mr-2" />
                Ajustes e Edição
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Oferecemos serviços de ajustes, personalizações e edição de conteúdo para manter seu site sempre atualizado.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <Upload className="mr-2" />
                Deploy
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Realizamos o deploy de suas aplicações em ambientes de produção, garantindo segurança e performance.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="flex items-center">
                <HeadphonesIcon className="mr-2" />
                Suporte Técnico
              </CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription>
                Fornecemos suporte técnico contínuo para garantir o funcionamento adequado de suas soluções web.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  )
}

