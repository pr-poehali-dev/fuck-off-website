import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import Icon from '@/components/ui/icon';

interface FuckOffMessage {
  id: string;
  name: string;
  photo?: string;
  curse: string;
  timestamp: Date;
}

const Message = () => {
  const { id } = useParams<{ id: string }>();
  const [message, setMessage] = useState<FuckOffMessage | null>(null);
  const [loading, setLoading] = useState(true);
  const [showReaction, setShowReaction] = useState(false);

  useEffect(() => {
    const mockMessages: FuckOffMessage[] = [
      {
        id: "abc123def",
        name: "Анонимус",
        curse: "Иди нахуй со своими тупыми вопросами!",
        timestamp: new Date(Date.now() - 1000 * 60 * 30)
      },
      {
        id: "xyz789ghi",
        name: "Злой Петя",
        curse: "Отвали со своей хернёй, заебал уже!",
        timestamp: new Date(Date.now() - 1000 * 60 * 60)
      }
    ];

    const foundMessage = mockMessages.find(msg => msg.id === id);
    
    setTimeout(() => {
      setMessage(foundMessage || null);
      setLoading(false);
    }, 500);
  }, [id]);

  const handleReaction = (reaction: string) => {
    setShowReaction(true);
    setTimeout(() => setShowReaction(false), 3000);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-pure-black text-pure-white flex items-center justify-center">
        <div className="text-center">
          <Icon name="Loader2" className="animate-spin text-electric-pink mb-4" size={48} />
          <p className="text-electric-yellow text-xl font-bold">Загружается послание...</p>
        </div>
      </div>
    );
  }

  if (!message) {
    return (
      <div className="min-h-screen bg-pure-black text-pure-white flex items-center justify-center">
        <div className="max-w-2xl mx-auto text-center px-4">
          <Icon name="AlertTriangle" className="text-electric-yellow mb-6" size={64} />
          <h1 className="font-impact text-4xl text-electric-pink mb-4">
            ПОСЛАНИЕ НЕ НАЙДЕНО!
          </h1>
          <p className="text-xl mb-8">
            Возможно, ссылка повреждена или послание было удалено.
          </p>
          <Link to="/">
            <Button className="bg-gradient-to-r from-electric-pink to-electric-yellow text-pure-black font-bold text-lg">
              <Icon name="Home" className="mr-2" size={20} />
              ВЕРНУТЬСЯ НА ГЛАВНУЮ
            </Button>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-pure-black text-pure-white">
      {/* Header */}
      <div className="bg-gradient-to-r from-electric-pink to-electric-yellow py-4">
        <div className="max-w-4xl mx-auto px-4 flex justify-between items-center">
          <Link to="/">
            <Button variant="ghost" className="text-pure-black font-bold hover:bg-black/20">
              <Icon name="ArrowLeft" className="mr-2" size={20} />
              НАЗАД
            </Button>
          </Link>
          <h1 className="font-impact text-2xl text-pure-black">
            САЙТ ДЛЯ ПОСЫЛАНИЯ НАХУЙ
          </h1>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="font-impact text-6xl md:text-8xl mb-6 gradient-electric animate-pulse-intense">
            ВАС ПОСЛАЛИ НАХУЙ!
          </h1>
          <p className="text-2xl text-electric-yellow mb-4">
            Кто-то отправил вам специальное послание...
          </p>
        </div>

        {/* Message Card */}
        <Card className="bg-gradient-to-br from-electric-pink to-electric-yellow p-1 animate-pulse-intense">
          <CardContent className="bg-pure-black m-1 rounded">
            <CardHeader>
              <CardTitle className="font-impact text-3xl text-center text-electric-yellow">
                <Icon name="MessageSquare" className="inline mr-2" size={32} />
                ПЕРСОНАЛЬНОЕ ПОСЛАНИЕ
              </CardTitle>
            </CardHeader>
            
            <div className="p-8">
              <div className="flex items-center gap-4 mb-6">
                {message.photo ? (
                  <img 
                    src={message.photo} 
                    alt="avatar" 
                    className="w-16 h-16 rounded-full border-2 border-electric-yellow" 
                  />
                ) : (
                  <div className="w-16 h-16 bg-electric-pink rounded-full flex items-center justify-center">
                    <Icon name="User" size={32} className="text-pure-black" />
                  </div>
                )}
                <div>
                  <h3 className="font-bold text-electric-yellow text-xl">От: {message.name}</h3>
                  <p className="text-gray-400">
                    {message.timestamp.toLocaleString('ru-RU')}
                  </p>
                </div>
              </div>
              
              <div className="bg-gradient-to-br from-electric-yellow/20 to-electric-pink/20 p-6 rounded-lg mb-6">
                <p className="text-pure-white font-bold text-2xl leading-relaxed text-center">
                  "{message.curse}"
                </p>
              </div>
              
              {/* Reaction Buttons */}
              <div className="flex justify-center gap-4 flex-wrap">
                <Button 
                  onClick={() => handleReaction('angry')}
                  className="bg-red-600 hover:bg-red-700 text-white font-bold"
                >
                  <Icon name="Flame" className="mr-2" size={20} />
                  БЕСИТ!
                </Button>
                
                <Button 
                  onClick={() => handleReaction('laugh')}
                  className="bg-electric-yellow text-pure-black hover:bg-electric-yellow/80 font-bold"
                >
                  <Icon name="Laugh" className="mr-2" size={20} />
                  СМЕШНО
                </Button>
                
                <Button 
                  onClick={() => handleReaction('sad')}
                  className="bg-blue-600 hover:bg-blue-700 text-white font-bold"
                >
                  <Icon name="Frown" className="mr-2" size={20} />
                  ОБИДНО
                </Button>
                
                <Button 
                  onClick={() => handleReaction('revenge')}
                  className="bg-electric-pink hover:bg-electric-pink/80 text-pure-black font-bold"
                >
                  <Icon name="Zap" className="mr-2" size={20} />
                  ОТОМЩУ!
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Reaction Feedback */}
        {showReaction && (
          <div className="mt-6 text-center">
            <Card className="bg-gradient-to-br from-electric-yellow to-electric-pink p-1">
              <CardContent className="bg-pure-black m-1 rounded p-4">
                <p className="text-electric-yellow font-bold text-xl">
                  <Icon name="CheckCircle" className="inline mr-2" size={24} />
                  РЕАКЦИЯ ОТПРАВЛЕНА!
                </p>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Call to Action */}
        <div className="mt-12 text-center">
          <h2 className="font-impact text-3xl text-electric-pink mb-4">
            ХОТИТЕ ОТВЕТИТЬ?
          </h2>
          <p className="text-xl mb-6">
            Создайте своё послание и отправьте обратно!
          </p>
          <Link to="/">
            <Button className="bg-gradient-to-r from-electric-pink to-electric-yellow text-pure-black font-bold text-xl px-8 py-4 hover:scale-105 transition-transform">
              <Icon name="Send" className="mr-2" size={24} />
              СОЗДАТЬ ПОСЛАНИЕ
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Message;