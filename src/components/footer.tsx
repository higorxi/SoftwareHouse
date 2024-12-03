import Link from 'next/link'

export default function Footer() {
  return (
    <footer className="bg-muted text-muted-foreground">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">WebCraft Solutions</h3>
            <p>Soluções web personalizadas e white label para o seu negócio.</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Links Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/servicos">Serviços</Link></li>
              <li><Link href="/sobre">Sobre</Link></li>
              <li><Link href="/contato">Contato</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contato</h3>
            <p>contato@webcraftsolutions.com</p>
            <p>+55 (11) 1234-5678</p>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p>&copy; 2023 WebCraft Solutions. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

