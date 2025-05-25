
import { Calendar, MapPin, User, ExternalLink } from 'lucide-react';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const MissingPersonCard = ({ person }) => {
  const getStatusColor = (status) => {
    switch (status) {
      case 'urgent':
        return 'bg-red-100 text-red-800 border-red-200';
      case 'recent':
        return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'found':
        return 'bg-green-100 text-green-800 border-green-200';
      default:
        return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status) => {
    switch (status) {
      case 'urgent':
        return 'Urgente';
      case 'recent':
        return 'Recente';
      case 'found':
        return 'Encontrado';
      default:
        return 'Ativo';
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('pt-BR');
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 border-l-4 border-l-blue-500">
      <CardHeader className="pb-3">
        <div className="flex justify-between items-start">
          <Badge className={getStatusColor(person.status)}>
            {getStatusText(person.status)}
          </Badge>
          <Button variant="ghost" size="sm">
            <ExternalLink className="h-4 w-4" />
          </Button>
        </div>
      </CardHeader>
      
      <CardContent className="space-y-4">
        {/* Large Photo Section */}
        <div className="w-full h-48 bg-gray-200 rounded-lg flex items-center justify-center overflow-hidden">
          <img 
            src={person.photo} 
            alt={`Foto de ${person.name}`}
            className="w-full h-full object-cover"
            onError={(e) => {
              const target = e.target;
              target.style.display = 'none';
              target.nextElementSibling?.classList.remove('hidden');
            }}
          />
          <User className="h-16 w-16 text-gray-400 hidden" />
        </div>

        {/* Basic Info */}
        <div className="text-center">
          <h3 className="font-semibold text-xl text-gray-900 mb-1">
            {person.name}
          </h3>
          <p className="text-sm text-gray-600 mb-3">
            {person.age} anos
          </p>
        </div>

        {/* Details */}
        <div className="space-y-2">
          <div className="flex items-center text-sm text-gray-600">
            <Calendar className="h-4 w-4 mr-2 flex-shrink-0" />
            <span>Visto em: {formatDate(person.lastSeen)}</span>
          </div>
          
          <div className="flex items-center text-sm text-gray-600">
            <MapPin className="h-4 w-4 mr-2 flex-shrink-0" />
            <span className="truncate">{person.location}</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-sm text-gray-700 line-clamp-2">
          {person.description}
        </p>

        {/* Actions */}
        <div className="flex space-x-2 pt-2">
          <Button size="sm" className="flex-1">
            Ver Detalhes
          </Button>
          <Button size="sm" variant="outline" className="flex-1">
            Compartilhar
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default MissingPersonCard;
