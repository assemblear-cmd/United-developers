import { useState } from 'react';
import { useLocation } from 'wouter';

interface CubeFace {
  name: string;
  path: string;
}

function CubeNavigation() {
  const [, setLocation] = useLocation();
  const [hoveredFace, setHoveredFace] = useState<string | null>(null);

  const faces: CubeFace[] = [
    { name: 'Portfolio', path: '/' },
    { name: 'Our Team', path: '/team' },
    { name: 'Current Project', path: '/' },
    { name: 'Contacts', path: '/' }
  ];

  const handleNavigation = (path: string) => {
    setLocation(path);
  };

  return (
    <div className="css-cube-container">
      <div className="css-cube">
        {faces.map((face, index) => (
          <div
            key={face.name}
            className={`cube-face cube-face-${index + 1} ${hoveredFace === face.name ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredFace(face.name)}
            onMouseLeave={() => setHoveredFace(null)}
          >
            <button 
              className="cube-nav-button"
              onClick={() => handleNavigation(face.path)}
              data-testid={`cube-nav-${face.name.toLowerCase().replace(' ', '-')}`}
            >
              <span className="cube-nav-text">{face.name}</span>
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CubeNavigation;