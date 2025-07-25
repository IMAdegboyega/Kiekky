import React from 'react'
import { Lock } from 'lucide-react'
import RecommendationCard from './RecommendationCard'

const Recommendations = ({ 
  recommendations = [
    { id: 1, name: 'Elena', image: '/api/placeholder/150/150', isVerified: true, isSaved: true },
    { id: 2, name: 'Elena', image: '/api/placeholder/150/150', isVerified: true, isSaved: false },
    { id: 3, name: 'Elena', image: '/api/placeholder/150/150', isVerified: true, isSaved: false },
    { id: 4, name: 'Elena', image: '/api/placeholder/150/150', isVerified: true, isSaved: false },
    { id: 5, name: 'Elena', image: '/api/placeholder/150/150', isVerified: true, isSaved: false },
    { id: 6, name: 'Elena', image: '/api/placeholder/150/150', isVerified: true, isSaved: false },
    { id: 7, name: 'Elena', image: '/api/placeholder/150/150', isVerified: true, isSaved: false },
    { id: 8, name: 'Elena', image: '/api/placeholder/150/150', isVerified: true, isSaved: false },
  ],
  onUserClick = () => {},
  onSaveUser = () => {}
}) => {
  return (
    <div className="rounded-lg p-4 hidden lg:block md:hidden">
      <h3 className="text-lg font-semibold mb-4">Recommendations</h3>

        <div className="grid grid-cols-2 gap-3">
          {recommendations.map((user) => (
            <RecommendationCard
              key={user.id}
              image={user.image}
              name={user.name}
              isVerified={user.isVerified}
              isSaved={user.isSaved}
              onClick={() => onUserClick(user)}
              onSaveClick={() => onSaveUser(user)}
            />
          ))}
        </div>

    </div>
  )
}

export default Recommendations