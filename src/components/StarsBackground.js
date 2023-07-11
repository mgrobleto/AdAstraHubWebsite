import React, { useCallback } from 'react';
import Particles from 'react-particles';
import { loadFull } from "tsparticles";

const StarsBackground = () => {
    const particlesInit =  useCallback( async engine => {
        console.log(engine);

        await loadFull(engine);
    }, [] );

    const particlesLoaded = useCallback( async container => {
        console.log(container);
    }, []);

  return (
    <Particles
    id='tsparticles'
    init={particlesInit}
    loaded={particlesLoaded}
    options={{
        backgroundMode: {
            enable: true,
            zIndex: 0
          },
          particles: {
            number: {
              value: 150,
              density: {
                enable: true,
                value_area: 800
              }
            },
            color: {
              value: "#ffffff"
            },
            shape: {
              type: "circle",
              stroke: {
                width: 0,
                color: "#000000"
              },
              image: {
                src: "img/github.svg",
                width: 100,
                height: 100
              }
            },
            opacity: {
              value: 0.4,
              random: true,
              anim: {
                enable: true,
                speed: 1,
                opacity_min: 0.1,
                sync: false
              }
            },
            size: {
              value: 3,
              random: true,
              anim: {
                enable: true,
                speed: 2,
                size_min: 0.1,
                sync: false
              }
            },
            line_linked: {
              enable: false
            },
            move: {
              enable: true,
              speed: 1,
              direction: "none",
              random: false,
              straight: false,
              out_mode: "out",
              bounce: false,
              attract: {
                enable: false,
                rotateX: 600,
                rotateY: 1200
              }
            }
          },
          interactivity: {
            detect_on: "canvas",
            events: {
              onhover: {
                enable: false,
              },
              onclick: {
                enable: true,
                mode: "repulse",
              },
              modes: {
                push: {
                    quantity: 4,
                },
                repulse: {
                    distance: 200,
                    duration: 0.2,
                },
            },
              resize: false
            }
          },
        retina_detect: true
    }}
    />
  )
}

export default StarsBackground
