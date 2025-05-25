import { useState } from 'react';
import { Search as SearchIcon, Grid, List } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import MissingPersonCard from '@/components/MissingPersonCard';
import SearchFilters from '@/components/SearchFilters';

// Mock data - in a real app this would come from an API
const mockCases = [
  {
    id: 1,
    name: "Maria Silva",
    age: 28,
    lastSeen: "2024-05-20",
    location: "São Paulo, SP",
    photo: "/placeholder.svg",
    description: "Última vez vista no centro da cidade usando blusa azul",
    status: "recent"
  },
  {
    id: 2,
    name: "João Santos", 
    age: 45,
    lastSeen: "2024-05-15",
    location: "Rio de Janeiro, RJ",
    photo: "/placeholder.svg",
    description: "Saiu para trabalhar e não retornou para casa",
    status: "urgent"
  },
  {
    id: 3,
    name: "Ana Costa",
    age: 17,
    lastSeen: "2024-05-18",
    location: "Belo Horizonte, MG", 
    photo: "/placeholder.svg",
    description: "Desapareceu após sair da escola no período da tarde",
    status: "recent"
  },
  {
    id: 4,
    name: "Carlos Oliveira",
    age: 32,
    lastSeen: "2024-05-10",
    location: "Porto Alegre, RS",
    photo: "/placeholder.svg",
    description: "Não retornou de uma caminhada no parque",
    status: "urgent"
  }
];

const Search = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState('grid');
  const [filteredCases, setFilteredCases] = useState(mockCases);

  const handleSearch = () => {
    const filtered = mockCases.filter(person =>
      person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
      person.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCases(filtered);
  };

  const handleFiltersChange = (filters) => {
    let filtered = [...mockCases];
    
    if (filters.location) {
      filtered = filtered.filter(person =>
        person.location.toLowerCase().includes(filters.location.toLowerCase())
      );
    }
    
    if (filters.status) {
      filtered = filtered.filter(person => person.status === filters.status);
    }
    
    if (searchTerm) {
      filtered = filtered.filter(person =>
        person.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
        person.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }
    
    setFilteredCases(filtered);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <h1 className="text-3xl font-bold text-gray-900 mb-6">
            Buscar Pessoas Desaparecidas
          </h1>
          
          {/* Search Bar */}
          <div className="flex gap-4 mb-6">
            <div className="flex-1 relative">
              <SearchIcon className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <Input
                type="text"
                placeholder="Buscar por nome, local ou características..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 py-6"
                onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
              />
            </div>
            <Button onClick={handleSearch} size="lg">
              Buscar
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Filters Sidebar */}
          <div className="lg:w-80">
            <SearchFilters onFiltersChange={handleFiltersChange} />
          </div>

          {/* Results */}
          <div className="flex-1">
            {/* Results Header */}
            <div className="flex justify-between items-center mb-6">
              <div>
                <h2 className="text-xl font-semibold text-gray-900">
                  {filteredCases.length} resultado(s) encontrado(s)
                </h2>
                <p className="text-gray-600">
                  {searchTerm && `Busca por: "${searchTerm}"`}
                </p>
              </div>
              
              {/* View Toggle */}
              <Tabs value={viewMode} onValueChange={setViewMode}>
                <TabsList>
                  <TabsTrigger value="grid">
                    <Grid className="h-4 w-4" />
                  </TabsTrigger>
                  <TabsTrigger value="list">
                    <List className="h-4 w-4" />
                  </TabsTrigger>
                </TabsList>
              </Tabs>
            </div>

            {/* Results Grid/List */}
            <Tabs value={viewMode} className="w-full">
              <TabsContent value="grid">
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                  {filteredCases.map((person) => (
                    <MissingPersonCard key={person.id} person={person} />
                  ))}
                </div>
              </TabsContent>
              
              <TabsContent value="list">
                <div className="space-y-4">
                  {filteredCases.map((person) => (
                    <div key={person.id} className="w-full max-w-2xl">
                      <MissingPersonCard person={person} />
                    </div>
                  ))}
                </div>
              </TabsContent>
            </Tabs>

            {/* No Results */}
            {filteredCases.length === 0 && (
              <div className="text-center py-12">
                <SearchIcon className="h-16 w-16 text-gray-300 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Nenhum resultado encontrado
                </h3>
                <p className="text-gray-600 mb-4">
                  Tente ajustar seus filtros ou termos de busca
                </p>
                <Button variant="outline" onClick={() => {
                  setSearchTerm('');
                  setFilteredCases(mockCases);
                }}>
                  Limpar Busca
                </Button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Search;
