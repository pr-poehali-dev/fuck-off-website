import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface FuckOffMessage {
  id: number;
  name: string;
  photo?: string;
  curse: string;
  timestamp: Date;
}

const Index = () => {
  const [messages, setMessages] = useState<FuckOffMessage[]>([
    {
      id: 1,
      name: "Анонимус",
      curse: "Иди нахуй со своими тупыми вопросами!",
      timestamp: new Date(Date.now() - 1000 * 60 * 30)
    },
    {
      id: 2,
      name: "Злой Петя",
      curse: "Отвали со своей хернёй, заебал уже!",
      timestamp: new Date(Date.now() - 1000 * 60 * 60)
    }
  ]);
  
  const [formData, setFormData] = useState({
    name: '',
    photo: '',
    curse: ''
  });
  
  const [counter, setCounter] = useState(1337);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (formData.name && formData.curse) {
      const newMessage: FuckOffMessage = {
        id: Date.now(),
        name: formData.name,
        photo: formData.photo,
        curse: formData.curse,
        timestamp: new Date()
      };
      setMessages([newMessage, ...messages]);
      setCounter(prev => prev + 1);
      setFormData({ name: '', photo: '', curse: '' });
    }
  };

  return (
    <div className="min-h-screen bg-pure-black text-pure-white overflow-x-hidden">
      {/* Hero Section */}
      <div className="relative py-20 px-4">
        <div className="absolute inset-0 bg-gradient-to-br from-electric-pink/20 to-electric-yellow/20"></div>
        <div className="relative max-w-4xl mx-auto text-center">
          <h1 className="font-impact text-6xl md:text-8xl lg:text-9xl mb-6 gradient-electric animate-pulse-intense">
            ПОШЁЛ НАХУЙ!
          </h1>
          <div className="text-2xl md:text-3xl font-bold mb-8 text-electric-yellow">
            <p className="mb-2">Почему вы здесь?</p>
            <p className="text-electric-pink">Потому что вас послали нахуй</p>
            <p className="text-pure-white">или вы хотите кого-то послать нахуй</p>
          </div>
          
          <div className="flex justify-center items-center gap-4 mb-8">
            <div className="bg-electric-pink text-pure-black px-6 py-3 rounded-lg font-bold text-xl animate-pulse-intense">
              <Icon name="Zap" className="inline mr-2" size={24} />
              {counter.toLocaleString()} ПОСЛАНИЙ
            </div>
          </div>
        </div>
      </div>

      {/* Form Section */}
      <div className="max-w-2xl mx-auto px-4 mb-16">
        <Card className="bg-gradient-to-br from-electric-pink to-electric-yellow p-1 animate-pulse-intense">
          <CardContent className="bg-pure-black m-1 rounded">
            <CardHeader>
              <CardTitle className="font-impact text-3xl text-center text-electric-yellow">
                <Icon name="Send" className="inline mr-2" size={32} />
                ФОРМА ДЛЯ ПОСЫЛАНИЯ НАХУЙ
              </CardTitle>
            </CardHeader>
            
            <form onSubmit={handleSubmit} className="space-y-6 p-6">
              <div>
                <label className="block text-electric-pink font-bold mb-2 text-lg">
                  КТО ПОСЫЛАЕТ:
                </label>
                <Input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({...formData, name: e.target.value})}
                  placeholder="Введите ваше имя..."
                  className="bg-pure-black border-electric-pink text-pure-white placeholder-gray-400 text-lg"
                  required
                />
              </div>
              
              <div>
                <label className="block text-electric-yellow font-bold mb-2 text-lg">
                  ФОТО (ОПЦИОНАЛЬНО):
                </label>
                <Input
                  type="url"
                  value={formData.photo}
                  onChange={(e) => setFormData({...formData, photo: e.target.value})}
                  placeholder="Ссылка на фото..."
                  className="bg-pure-black border-electric-yellow text-pure-white placeholder-gray-400 text-lg"
                />
              </div>
              
              <div>
                <label className="block text-electric-pink font-bold mb-2 text-lg">
                  ТЕКСТ С ПРОКЛЯТИЯМИ:
                </label>
                <Textarea
                  value={formData.curse}
                  onChange={(e) => setFormData({...formData, curse: e.target.value})}
                  placeholder="Напишите как следует послать нахуй..."
                  className="bg-pure-black border-electric-pink text-pure-white placeholder-gray-400 text-lg min-h-[120px]"
                  required
                />
              </div>
              
              <Button 
                type="submit"
                className="w-full bg-gradient-to-r from-electric-pink to-electric-yellow text-pure-black font-bold text-xl py-4 hover:animate-shake transition-all duration-300 hover:scale-105"
              >
                <Icon name="Flame" className="mr-2" size={24} />
                ПОСЛАТЬ НАХУЙ!
                <Icon name="Flame" className="ml-2" size={24} />
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>

      {/* Messages Gallery */}
      <div className="max-w-4xl mx-auto px-4 pb-16">
        <h2 className="font-impact text-4xl text-center mb-8 text-electric-yellow">
          <Icon name="MessageSquare" className="inline mr-2" size={36} />
          ГАЛЕРЕЯ ПОСЛАНИЙ
        </h2>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {messages.map((message) => (
            <Card key={message.id} className="bg-gradient-to-br from-electric-yellow/20 to-electric-pink/20 border-electric-pink hover:scale-105 transition-transform duration-300">
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-4">
                  {message.photo ? (
                    <img src={message.photo} alt="avatar" className="w-12 h-12 rounded-full border-2 border-electric-yellow" />
                  ) : (
                    <div className="w-12 h-12 bg-electric-pink rounded-full flex items-center justify-center">
                      <Icon name="User" size={24} className="text-pure-black" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-bold text-electric-yellow">{message.name}</h3>
                    <p className="text-gray-400 text-sm">
                      {message.timestamp.toLocaleString('ru-RU')}
                    </p>
                  </div>
                </div>
                
                <p className="text-pure-white font-semibold text-lg leading-relaxed">
                  "{message.curse}"
                </p>
                
                <div className="mt-4 flex justify-end">
                  <Button 
                    variant="ghost" 
                    size="sm"
                    className="text-electric-pink hover:bg-electric-pink/20"
                  >
                    <Icon name="Heart" size={16} className="mr-1" />
                    Лайк
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-electric-pink to-electric-yellow py-8">
        <div className="max-w-4xl mx-auto text-center px-4">
          <p className="font-impact text-2xl text-pure-black mb-2">
            САЙТ ДЛЯ ПОСЫЛАНИЯ НАХУЙ
          </p>
          <p className="text-pure-black font-bold">
            Здесь каждый может выразить свои истинные чувства без цензуры
          </p>
          <div className="mt-4 flex justify-center gap-4">
            <Icon name="Skull" size={32} className="text-pure-black animate-pulse-intense" />
            <Icon name="Flame" size={32} className="text-pure-black animate-pulse-intense" />
            <Icon name="Zap" size={32} className="text-pure-black animate-pulse-intense" />
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;