import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Search, MapPin, Calendar, Phone, Mail, Heart } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import MissingPersonCard from '@/components/MissingPersonCard';
import SearchFilters from '@/components/SearchFilters';

// Mock data for demonstration
const recentCases = [
  {
    id: 1,
    name: "Maria Silva",
    age: 28,
    lastSeen: "2024-05-20",
    location: "São Paulo, SP",
    photo: "/placeholder.svg",
    description: "Última vez vista no centro da cidade",
    status: "recent"
  },
  {
    id: 2,
    name: "João Santos",
    age: 45,
    lastSeen: "2024-05-15",
    location: "Rio de Janeiro, RJ",
    photo: "/placeholder.svg",
    description: "Saiu para trabalhar e não retornou",
    status: "urgent"
  },
  {
    id: 3,
    name: "Ana Costa",
    age: 17,
    lastSeen: "2024-05-18",
    location: "Belo Horizonte, MG",
    photo: "/placeholder.svg",
    description: "Desapareceu após sair da escola",
    status: "recent"
  }
];

const Index = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Heart className="h-8 w-8 text-blue-600" />
              <h1 className="text-2xl font-bold text-gray-900">Encontrar</h1>
            </div>
            
            <nav className="hidden md:flex space-x-6">
              <Link to="/" className="text-gray-600 hover:text-blue-600 transition-colors">
                Início
              </Link>
              <Link to="/search" className="text-gray-600 hover:text-blue-600 transition-colors">
                Buscar
              </Link>
              <Link to="/report" className="text-gray-600 hover:text-blue-600 transition-colors">
                Reportar
              </Link>
              <Link to="/about" className="text-gray-600 hover:text-blue-600 transition-colors">
                Sobre
              </Link>
            </nav>

            <Button className="bg-blue-600 hover:bg-blue-700">
              <Phone className="h-4 w-4 mr-2" />
              Emergência
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-6">
            Ajudamos a <span className="text-blue-600">reunir famílias</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Uma plataforma dedicada a conectar pessoas desaparecidas com suas famílias
          </p>
          
          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-8">
            <div className="relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar por nome, local ou características..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6 text-lg"
              />
              <Button className="absolute right-2 top-2 px-6">
                Buscar
              </Button>
            </div>
          </div>

          {/* Quick Actions */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/report">
              <Button size="lg" className="bg-red-600 hover:bg-red-700">
                Reportar Desaparecimento
              </Button>
            </Link>
            <Link to="/search">
              <Button size="lg" variant="outline">
                Ver Todos os Casos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Recent Cases */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">
              Casos Recentes
            </h3>
            <p className="text-lg text-gray-600">
              Ajude-nos a encontrar essas pessoas
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {recentCases.map((person) => (
              <MissingPersonCard key={person.id} person={person} />
            ))}
          </div>

          <div className="text-center">
            <Link to="/search">
              <Button variant="outline" size="lg">
                Ver Mais Casos
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Statistics */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-blue-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">150+</div>
              <div className="text-lg text-gray-600">Pessoas Encontradas</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">500+</div>
              <div className="text-lg text-gray-600">Casos Ativos</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-blue-600 mb-2">24/7</div>
              <div className="text-lg text-gray-600">Suporte Disponível</div>
            </div>
          </div>
        </div>
      </section>

      {/* How to Help */}
      <section className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h3 className="text-3xl font-bold text-gray-900 mb-8">
            Como Você Pode Ajudar
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Search className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Compartilhe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Compartilhe os casos em suas redes sociais para aumentar o alcance
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <MapPin className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Informe</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Se você tem informações sobre algum caso, entre em contato conosco
                </p>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
                <CardTitle>Apoie</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600">
                  Ofereça apoio emocional às famílias e participe de campanhas de busca
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Heart className="h-6 w-6" />
                <span className="text-xl font-bold">Encontrar</span>
              </div>
              <p className="text-gray-400">
                Conectando famílias e trazendo esperança
              </p>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Links Úteis</h4>
              <ul className="space-y-2 text-gray-400">
                <li><Link to="/search" className="hover:text-white">Buscar</Link></li>
                <li><Link to="/report" className="hover:text-white">Reportar</Link></li>
                <li><Link to="/about" className="hover:text-white">Sobre</Link></li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Contato</h4>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  0800-123-4567
                </li>
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  contato@encontrar.com
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="font-semibold mb-4">Emergência</h4>
              <p className="text-gray-400 mb-2">
                Em caso de emergência, ligue imediatamente:
              </p>
              <p className="text-xl font-bold text-red-400">190</p>
            </div>
          </div>
          
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Encontrar. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
