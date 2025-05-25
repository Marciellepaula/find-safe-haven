
import { useState } from 'react';
import { Filter, MapPin, Calendar, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';

interface SearchFiltersProps {
  onFiltersChange: (filters: any) => void;
}

const SearchFilters = ({ onFiltersChange }: SearchFiltersProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [filters, setFilters] = useState({
    location: '',
    ageRange: '',
    dateRange: '',
    status: '',
    gender: ''
  });

  const handleFilterChange = (key: string, value: string) => {
    const newFilters = { ...filters, [key]: value };
    setFilters(newFilters);
    onFiltersChange(newFilters);
  };

  const clearFilters = () => {
    const emptyFilters = {
      location: '',
      ageRange: '',
      dateRange: '',
      status: '',
      gender: ''
    };
    setFilters(emptyFilters);
    onFiltersChange(emptyFilters);
  };

  return (
    <Card className="w-full">
      <Collapsible open={isOpen} onOpenChange={setIsOpen}>
        <CollapsibleTrigger asChild>
          <CardHeader className="cursor-pointer hover:bg-gray-50 transition-colors">
            <CardTitle className="flex items-center justify-between">
              <div className="flex items-center space-x-2">
                <Filter className="h-5 w-5" />
                <span>Filtros de Busca</span>
              </div>
              <Button variant="ghost" size="sm">
                {isOpen ? 'Ocultar' : 'Mostrar'}
              </Button>
            </CardTitle>
          </CardHeader>
        </CollapsibleTrigger>
        
        <CollapsibleContent>
          <CardContent className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {/* Location Filter */}
              <div className="space-y-2">
                <Label htmlFor="location" className="flex items-center space-x-2">
                  <MapPin className="h-4 w-4" />
                  <span>Localização</span>
                </Label>
                <Input
                  id="location"
                  placeholder="Cidade, Estado..."
                  value={filters.location}
                  onChange={(e) => handleFilterChange('location', e.target.value)}
                />
              </div>

              {/* Age Range Filter */}
              <div className="space-y-2">
                <Label htmlFor="ageRange" className="flex items-center space-x-2">
                  <User className="h-4 w-4" />
                  <span>Faixa Etária</span>
                </Label>
                <Select value={filters.ageRange} onValueChange={(value) => handleFilterChange('ageRange', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="0-12">0-12 anos</SelectItem>
                    <SelectItem value="13-17">13-17 anos</SelectItem>
                    <SelectItem value="18-30">18-30 anos</SelectItem>
                    <SelectItem value="31-50">31-50 anos</SelectItem>
                    <SelectItem value="51+">51+ anos</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Date Range Filter */}
              <div className="space-y-2">
                <Label htmlFor="dateRange" className="flex items-center space-x-2">
                  <Calendar className="h-4 w-4" />
                  <span>Data do Desaparecimento</span>
                </Label>
                <Select value={filters.dateRange} onValueChange={(value) => handleFilterChange('dateRange', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Selecione..." />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="today">Hoje</SelectItem>
                    <SelectItem value="week">Última semana</SelectItem>
                    <SelectItem value="month">Último mês</SelectItem>
                    <SelectItem value="quarter">Últimos 3 meses</SelectItem>
                    <SelectItem value="year">Último ano</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Status Filter */}
              <div className="space-y-2">
                <Label htmlFor="status">Status</Label>
                <Select value={filters.status} onValueChange={(value) => handleFilterChange('status', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos os status" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="urgent">Urgente</SelectItem>
                    <SelectItem value="recent">Recente</SelectItem>
                    <SelectItem value="active">Ativo</SelectItem>
                    <SelectItem value="found">Encontrado</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Gender Filter */}
              <div className="space-y-2">
                <Label htmlFor="gender">Gênero</Label>
                <Select value={filters.gender} onValueChange={(value) => handleFilterChange('gender', value)}>
                  <SelectTrigger>
                    <SelectValue placeholder="Todos" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="male">Masculino</SelectItem>
                    <SelectItem value="female">Feminino</SelectItem>
                    <SelectItem value="other">Outro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Filter Actions */}
            <div className="flex justify-between items-center pt-4 border-t">
              <Button variant="outline" onClick={clearFilters}>
                Limpar Filtros
              </Button>
              <div className="text-sm text-gray-500">
                {Object.values(filters).filter(Boolean).length} filtro(s) aplicado(s)
              </div>
            </div>
          </CardContent>
        </CollapsibleContent>
      </Collapsible>
    </Card>
  );
};

export default SearchFilters;
