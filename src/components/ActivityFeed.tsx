import { useEffect, useState } from 'react';

const activities = [
  '"Ana M. de Colombia acaba de acceder al método" - hace 3 min',
  '"Pedro L. de México completó el ejercicio 1" - hace 7 min',
  '"Carmen R. de España reportó mejorías" - hace 12 min',
  '"Luis R. de Argentina descargó el método" - hace 15 min',
  '"Sofia P. de Chile empezó el programa" - hace 18 min',
  '"Miguel T. de Perú tuvo su primera noche sin ansiedad" - hace 22 min',
  '"Laura M. de Venezuela superó su primer ataque de pánico" - hace 25 min',
  '"Carlos D. de Ecuador reportó 80% menos ansiedad" - hace 28 min'
];

export const ActivityFeed = () => {
  const [currentActivities, setCurrentActivities] = useState(activities.slice(0, 3));

  useEffect(() => {
    const interval = setInterval(() => {
      const shuffled = [...activities].sort(() => 0.5 - Math.random());
      setCurrentActivities(shuffled.slice(0, 3));
    }, 15000); // Update every 15 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="bg-muted rounded-lg p-6 max-w-md mx-auto">
      <h4 className="font-semibold text-success mb-4 flex items-center">
        💬 Actividad reciente:
      </h4>
      <div className="space-y-3">
        {currentActivities.map((activity, index) => (
          <div
            key={index}
            className="text-sm text-success font-medium border-b border-border pb-2 last:border-b-0 last:pb-0"
          >
            {activity}
          </div>
        ))}
      </div>
    </div>
  );
};