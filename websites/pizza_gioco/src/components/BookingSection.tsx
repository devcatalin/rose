import { useState } from 'react';
import { Calendar, Users, Clock, Phone, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card } from './ui/card';

export function BookingSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    time: '',
    guests: '',
    eventType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the data to your backend
    alert('Rezervarea a fost trimisă! Vă vom contacta în curând pentru confirmare.');
    setFormData({
      name: '',
      email: '',
      phone: '',
      date: '',
      time: '',
      guests: '',
      eventType: '',
      message: ''
    });
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <section id="booking" className="py-16" style={{ backgroundColor: '#FFFBEB' }}>
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-amber-900 mb-4">Rezerva o Petrecere sau o Pomana</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Transformă-ți evenimentul special într-o experiență de neuitat la Pizza Gioco. 
            Completează formularul de mai jos și te vom contacta pentru a discuta detaliile.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <Card className="p-6 bg-white shadow-lg border border-amber-200">
            <h3 className="text-xl font-semibold text-amber-900 mb-4 text-center md:text-left">De ce să alegi Pizza Gioco?</h3>
            <div className="space-y-6 md:space-y-4">
              <div className="flex flex-col items-center gap-3 md:flex-row md:items-start">
                <Users className="w-5 h-5 text-amber-700 md:mt-1" />
                <div className="text-center md:text-left">
                  <h4 className="font-medium text-amber-900">Spațiu generos</h4>
                  <p className="text-gray-600 text-sm">Capacitate până la 80 de persoane în atmosferă caldă și primitoare</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3 md:flex-row md:items-start">
                <Calendar className="w-5 h-5 text-amber-700 md:mt-1" />
                <div className="text-center md:text-left">
                  <h4 className="font-medium text-amber-900">Planificare completă</h4>
                  <p className="text-gray-600 text-sm">Te ajutăm să organizezi totul, de la meniu la decorațiuni</p>
                </div>
              </div>
              
              <div className="flex flex-col items-center gap-3 md:flex-row md:items-start">
                <Clock className="w-5 h-5 text-amber-700 md:mt-1" />
                <div className="text-center md:text-left">
                  <h4 className="font-medium text-amber-900">Program flexibil</h4>
                  <p className="text-gray-600 text-sm">Ne adaptăm programului evenimentului tău</p>
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4 md:p-6 bg-amber-700 text-white shadow-lg w-full max-w-sm md:max-w-none">
            <h3 className="text-xl font-semibold mb-2 md:mb-4 text-center md:text-left">Contact</h3>
            <div className="space-y-2 md:space-y-3 flex flex-col items-center md:items-start">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5" />
                <span>0712 345 678</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5" />
                <span>office@pizzagioco.ro</span>
              </div>
            </div>
            <p className="mt-2 md:mt-4 text-amber-100 text-sm text-center md:text-left">
              Sună-ne direct pentru rezervări urgente sau întrebări specifice!
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}