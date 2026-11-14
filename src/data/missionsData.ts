import { imageManifest } from './image-manifest';
import type { MissionData } from '../types/mission';

export const missionsData: Record<string, MissionData> = {
  apollo11: {
    id: 'apollo11',
    name: 'Apollo 11',
    tagline: 'Humanity\'s First Footstep on Another World',
    destination: 'Moon',
    destinationGroup: 'moon',
    classification: 'Intentionally Abandoned',
    statusBadge: 'Historic Moon Monument',
    statusDescription: 'The bottom half of the Eagle lunar lander and scientific experiments remain peacefully parked at Tranquility Base. They have rested untouched for over 50 years!',
    landingSite: 'Tranquility Base (Sea of Tranquility)',
    coordinates: '0.67408° N, 23.47297° E',
    dates: {
      launch: '1969-07-16',
      landing: '1969-07-20',
      end: '1969-07-24'
    },
    duration: '8 days, 3 hours, 18 minutes',
    distance: '384,400 km (about 238,855 miles from Earth)',
    purpose: 'Fly three astronauts to the Moon, land two of them on the surface, collect Moon rocks, and return everyone safely home to Earth.',
    quote: {
      text: 'That\'s one small step for man, one giant leap for mankind.',
      author: 'Neil A. Armstrong'
    },
    equipment: {
      name: 'Lunar Module Eagle (Descent Stage)',
      description: 'The golden four-legged bottom half of the Eagle spacecraft. It had rocket thrusters to slow down the landing, storage boxes for astronaut tools, and landing pads shaped like dinner plates.',
      fate: 'Intentionally left behind on the Moon so the astronauts had a steady launch pad to blast off and fly back home. It still sits quietly in the grey Moon dust today.',
      type: 'Crewed Moon Lander Base',
      mass: 'About 10,149 kg (22,375 lbs) at touchdown',
      powerSource: 'Four super-tough silver-zinc batteries',
      notableInstruments: [
        'Moonquake Detector (Seismometer)',
        'Cosmic Laser Reflector Mirror',
        'Solar Wind Foil Trap (like a space sail)',
        'Astronaut Chest Cameras'
      ]
    },
    keyEvents: [
      {
        date: 'July 16, 1969',
        title: 'Blasting Off on the Giant Saturn V',
        description: 'A 36-story tall Saturn V rocket thundered off the launch pad in Florida, sending astronauts Neil Armstrong, Buzz Aldrin, and Michael Collins toward the Moon.',
        phase: 'Launch'
      },
      {
        date: 'July 19, 1969',
        title: 'Arriving in Moon Orbit',
        description: 'The crew fired their main rocket engine behind the Moon, slowing down just enough to be caught by the Moon\'s gentle gravity.',
        phase: 'Translunar'
      },
      {
        date: 'July 20, 1969 (20:17 UTC)',
        title: '"The Eagle Has Landed!"',
        description: 'With alarms buzzing and less than 30 seconds of fuel left, Neil Armstrong calmly steered the Eagle past boulder fields and set it down gently on the Moon.',
        phase: 'Landing'
      },
      {
        date: 'July 21, 1969 (02:56 UTC)',
        title: 'First Human Steps in the Moon Dust',
        description: 'Neil Armstrong climbed down the ladder and pressed his boot into the soft powder. Millions of families around the world watched live on grainy black-and-white TVs.',
        phase: 'Surface Walk'
      },
      {
        date: 'July 21, 1969 (17:54 UTC)',
        title: 'Blasting Off into the Black Sky',
        description: 'The astronauts used the bottom half of the Eagle as a launch pad, firing the top cabin rocket to zoom back into orbit and rejoin Michael Collins in Columbia.',
        phase: 'Ascent'
      },
      {
        date: 'July 24, 1969',
        title: 'Splashdown in the Pacific Ocean',
        description: 'The command module Columbia parachuted down into the Pacific Ocean, where Navy divers and the USS Hornet plucked the smiling astronauts from the water.',
        phase: 'Safe Return'
      }
    ],
    discoveries: [
      {
        title: 'Ancient Magma Oceans on the Moon',
        description: 'The astronauts shoveled up 47 pounds of Moon rocks. Back on Earth, geologists discovered the rocks formed from deep oceans of boiling molten lava nearly 4 billion years ago.',
        significance: 'It proved the Moon wasn\'t just a cold chunk of space debris — it had an active, fiery geological history just like early Earth!',
        todayImpact: 'Helped scientists build the Giant Impact theory: that a Mars-sized planet named Theia smashed into young Earth and created our Moon.',
        tag: 'Moon Rocks'
      },
      {
        title: 'Bouncing Lasers off a Moon Mirror',
        description: 'Buzz Aldrin set up a panel of special prism mirrors. Scientists on Earth still aim giant green lasers at this mirror today, timing how long it takes the beam to bounce back.',
        significance: 'By measuring the round-trip laser time, scientists proved the Moon is slowly spiraling away from Earth by about 3.8 centimeters (1.5 inches) every year.',
        todayImpact: 'Helps satellite navigators keep GPS accurate and tests Albert Einstein\'s theories of gravity with extreme precision.',
        tag: 'Physics'
      },
      {
        title: 'Catching Particles from the Sun',
        description: 'The astronauts rolled out a shiny sheet of aluminum foil on a pole like a mini sail. It trapped invisible particles blowing off the Sun (solar wind).',
        significance: 'Provided the first clean sample of the Sun\'s ingredients without Earth\'s magnetic shield getting in the way.',
        todayImpact: 'Helps scientists predict giant solar storms that can affect power grids and internet satellites on Earth.',
        tag: 'Solar Science'
      },
      {
        title: 'No Alien Bugs or Water on the Surface',
        description: 'Scientists in hazmat suits tested the Moon soil in strict quarantine labs. They found zero bacteria, zero mold, and zero liquid water.',
        significance: 'Confirmed the Moon is completely dry and sterile on its surface, settling an old debate about whether space germs could infect Earth.',
        todayImpact: 'Created the rules NASA uses today to keep space samples safe and clean when returning rocks from Mars.',
        tag: 'Space Biology'
      }
    ],
    educationalSummary: 'Apollo 11 was humanity\'s first grand adventure to another world. When Neil Armstrong and Buzz Aldrin stepped out onto the grey dust, they proved that big dreams and science could take us anywhere. When they blasted off to go home, they left their golden landing base behind. Today, more than 50 years later, that metal base still rests under the stars — a silent monument to the very first time humans walked beyond Earth.',
    thenVsNow: {
      thenTitle: '1969: A Quick 21-Hour Visit',
      thenText: 'The Apollo 11 astronauts spent only two and a half hours walking outside. Their suits were stiff, their oxygen backpacks had limited battery life, and doctors watched nervously from Earth.',
      thenDate: 'July 1969',
      thenImage: 'apollo11/img1.jpg',
      nowTitle: 'Today: The Artemis Era & Living on the Moon',
      nowText: 'NASA\'s new Artemis program is sending modern astronauts to build permanent science bases at the Moon\'s South Pole, where giant craters hide frozen ice that future crews can turn into water and rocket fuel.',
      nowDate: '2026 and Beyond',
      nowImage: 'apollo11/img4.jpg',
      legacyTakeaway: 'The descent stage at Tranquility Base proved that human explorers can safely build and land spacecraft on other worlds.',
      successorMissions: ['Artemis II & III', 'Lunar Reconnaissance Orbiter (LRO)', 'Commercial Lunar Landers']
    },
    heroImage: 'apollo11/img1.jpg',
    images: imageManifest.apollo11?.images || []
  },

  surveyor3: {
    id: 'surveyor3',
    name: 'Surveyor 3',
    tagline: 'The Robotic Scout and Space Time Capsule',
    destination: 'Moon',
    destinationGroup: 'moon',
    classification: 'Intentionally Abandoned',
    statusBadge: 'Visited Time Capsule',
    statusDescription: 'Landed in 1967 to test if Moon dust was safe. Two years later, Apollo 12 astronauts actually walked over to visit it and brought parts back to Earth!',
    landingSite: 'Ocean of Storms (Oceanus Procellarum)',
    coordinates: '3.015° S, 23.418° W',
    dates: {
      launch: '1967-04-17',
      landing: '1967-04-20',
      end: '1967-05-04'
    },
    duration: '14 Earth days of robotic work',
    distance: '383,000 km from Earth',
    purpose: 'Land automatically on the Moon, dig into the soil with a mini robotic scoop, and check whether the Moon was solid enough for human astronaut boots.',
    quote: {
      text: 'We came to visit Surveyor. It\'s in great shape, sitting right on the crater slope.',
      author: 'Pete Conrad (Apollo 12 Astronaut Commander)'
    },
    equipment: {
      name: 'Surveyor 3 Tripod Lander & Robotic Claw',
      description: 'A three-legged aluminum spider probe carrying a black-and-white television camera, radar sensors, and an electric claw arm to dig mini trenches in the lunar soil.',
      fate: 'Resting on the gentle slope of a 650-foot crater. In November 1969, Apollo 12 astronauts Pete Conrad and Alan Bean hiked down into the crater, took photos, and clipped off its camera to bring home.',
      type: 'Robotic Lunar Soft Lander',
      mass: 'About 302 kg (666 lbs) upon landing',
      powerSource: 'Solar panel on top producing 85 watts (enough to power a light bulb)',
      notableInstruments: [
        'Motorized Trenching Claw (Scoop)',
        'Slow-Scan Television Camera',
        'Lunar Soil Pressure Sensors',
        'Radar Altimeter Landing System'
      ]
    },
    keyEvents: [
      {
        date: 'April 17, 1967',
        title: 'Launch toward the Moon',
        description: 'An Atlas-Centaur rocket hurled the three-legged Surveyor 3 robotic probe on a direct flight to the Moon.',
        phase: 'Launch'
      },
      {
        date: 'April 20, 1967',
        title: 'The Triple-Bounce Soft Landing',
        description: 'Because the Moon dust was so reflective, the landing radar got slightly confused. Surveyor 3 bounced twice like a rubber ball before settling peacefully on a crater slope!',
        phase: 'Landing'
      },
      {
        date: 'April 21–May 3, 1967',
        title: 'Digging the First Moon Trenches',
        description: 'Engineers on Earth controlled its little mechanical claw, digging four trenches up to 7 inches deep and beaming back 6,315 clear television pictures.',
        phase: 'Surface Science'
      },
      {
        date: 'May 4, 1967',
        title: 'The Freezing Lunar Night',
        description: 'As the sun set for the two-week lunar night, temperatures plunged to minus 250 degrees Fahrenheit, freezing the batteries and putting the robot to sleep forever.',
        phase: 'End of Mission'
      },
      {
        date: 'November 19, 1969',
        title: 'Humans Walk Over to Visit a Robot!',
        description: 'Apollo 12 astronauts Pete Conrad and Alan Bean performed a pinpoint landing just 500 feet away, walked over to Surveyor 3, and inspected it face-to-face!',
        phase: 'Space Archaeology'
      }
    ],
    discoveries: [
      {
        title: 'No Quicksand on the Moon!',
        description: 'Before Surveyor 3, some scientists worried the Moon was covered in miles of soft powdery dust that would swallow up landing spaceships like quicksand. The scoop proved the soil was firm and crunchy.',
        significance: 'Gave NASA the green light and full confidence that astronauts could walk and land safely on the Moon.',
        todayImpact: 'Engineers still use Surveyor\'s soil data to design wheels and landing feet for future lunar rovers.',
        tag: 'Moon Soil'
      },
      {
        title: 'The First Space Exposure Test',
        description: 'When Apollo 12 brought Surveyor\'s camera back to Earth, scientists studied how 31 months of blazing solar radiation, freezing nights, and tiny micrometeoroids affected metals and glass.',
        significance: 'Taught engineers how materials age in the harsh vacuum of deep space.',
        todayImpact: 'Helped engineers pick the toughest protective coatings for the International Space Station and the James Webb Space Telescope.',
        tag: 'Space Tech'
      },
      {
        title: 'The Great Bacteria Mystery',
        description: 'Scientists thought they found a tiny sleeping Earth bacterium inside the returned camera foam. Later tests suggested it was accidental contamination in the lab, but it taught NASA a huge lesson.',
        significance: 'Proved how easy it is to bring Earth germs into space experiments, inspiring ultra-clean sterile lab rooms.',
        todayImpact: 'Led to the cleanroom standards NASA uses today when building Mars rovers so we don\'t accidentally bring Earth germs to other planets.',
        tag: 'Astrobiology'
      }
    ],
    educationalSummary: 'Surveyor 3 was a brave three-legged robotic scout sent to test the Moon\'s surface before humans dared to land there. Two years later, the Apollo 12 astronauts pulled off an incredible space trick: they landed right near it and walked over to say hello! Surveyor 3 became humanity\'s first robotic time capsule visited in person on another celestial body.',
    thenVsNow: {
      thenTitle: '1967: Testing the Unknown',
      thenText: 'Nobody knew if the Moon was solid rock or powdery dust quicksand. Surveyor 3 reached out with a tiny motorized claw to scrape the ground and prove it was safe for human feet.',
      thenDate: 'April 1967',
      thenImage: 'surveyor3/img1.jpg',
      nowTitle: '1969: Astronauts Visit Their Robotic Pioneer',
      nowText: 'Astronauts walked across the crater, snapped close-up photos of Surveyor 3, and clipped off its camera with bolt cutters to carry it back home to science labs on Earth.',
      nowDate: 'November 1969',
      nowImage: 'surveyor3/img2.jpg',
      legacyTakeaway: 'Surveyor 3 proved that human astronauts and robotic probes can rendezvous and work as a team across the solar system.',
      successorMissions: ['Apollo 12', 'VIPER Ice Rover', 'Intuitive Machines Moon Landers']
    },
    heroImage: 'surveyor3/img1.jpg',
    images: imageManifest.surveyor3?.images || []
  },

  viking1: {
    id: 'viking1',
    name: 'Viking 1',
    tagline: 'The First Long-Term Science Lab on Mars',
    destination: 'Mars',
    destinationGroup: 'mars',
    classification: 'Decommissioned Equipment',
    statusBadge: 'Silent Martian Sentinel',
    statusDescription: 'Worked tirelessly for over 6 years on the surface of Mars. It sent back the world\'s first color photos of Mars before falling silent in November 1982.',
    landingSite: 'Chryse Planitia (The Plains of Gold)',
    coordinates: '22.697° N, 48.222° W',
    dates: {
      launch: '1975-08-20',
      landing: '1976-07-20',
      end: '1982-11-13'
    },
    duration: '6 years, 116 days on Mars (2,245 Martian days)',
    distance: '379 million km flight path from Earth',
    purpose: 'Land safely on Mars, beam back clear photos of the landscape, study the red dust and thin atmosphere, and search for any chemical signs of Martian life.',
    quote: {
      text: 'Touchdown! We have touchdown on the plains of Chryse Planitia.',
      author: 'NASA JPL Mission Control (July 20, 1976)'
    },
    equipment: {
      name: 'Viking Lander 1',
      description: 'A six-sided heavy lander equipped with a 10-foot robotic arm, two rotating scanning cameras, miniature chemical testing ovens, and nuclear heat generators to survive freezing Martian nights.',
      fate: 'Still resting in the orange sands of Chryse Planitia. In 1982, NASA renamed it the Thomas Mutch Memorial Station in honor of the head imaging scientist.',
      type: 'Nuclear-Powered Robotic Surface Laboratory',
      mass: '572 kg (1,261 lbs) on the surface',
      powerSource: 'Two nuclear heat generators (RTGs) that turned decaying plutonium heat into electricity',
      notableInstruments: [
        'Twin Color Panorama Cameras',
        'Robotic Soil Scoop & Shovel',
        'Three Automated Biology Test Chambers',
        'Mini Weather Station (Wind & Temperature)'
      ]
    },
    keyEvents: [
      {
        date: 'August 20, 1975',
        title: 'Launch on a Giant Titan Rocket',
        description: 'Viking 1 blasted off from Cape Canaveral on an 11-month voyage across deep space toward the mysterious Red Planet.',
        phase: 'Launch'
      },
      {
        date: 'June 19, 1976',
        title: 'Entering Mars Orbit to Scout a Site',
        description: 'The Viking Orbiter entered Mars orbit and took high-altitude photos to find a smooth, flat place free of dangerous boulders for the lander.',
        phase: 'Orbit Insertion'
      },
      {
        date: 'July 20, 1976',
        title: 'Touchdown and First Photo in 25 Seconds!',
        description: 'The lander parachuted through the thin atmosphere, fired rocket thrusters to cushion the touchdown, and beamed back its first photo of a footpad in the red dust within 25 seconds!',
        phase: 'Landing'
      },
      {
        date: 'July–August 1976',
        title: 'Sniffing the Martian Dirt for Life',
        description: 'The robotic arm reached out, scooped up red soil, and dropped it into tiny onboard test chambers to see if microscopic alien microbes were breathing.',
        phase: 'Surface Science'
      },
      {
        date: 'November 13, 1982',
        title: 'The Silent Farewell',
        description: 'After more than 6 years of flawless service, a software update accidentally scrambled the radio antenna direction, ending communication with the loyal lander.',
        phase: 'End of Mission'
      }
    ],
    discoveries: [
      {
        title: 'Why Mars Is Red (Rust Dust!)',
        description: 'Viking analyzed the Martian soil and discovered it is rich in iron, silicon, and chlorine. The iron has rusted from ancient exposure to oxygen and water, coating the planet in reddish-orange rust dust!',
        significance: 'Solved the ancient mystery of why the "Red Planet" glows red in our night sky.',
        todayImpact: 'Helps scientists understand how rocks and minerals break down in desert environments across the solar system.',
        tag: 'Geology'
      },
      {
        title: 'The Mysterious Biology Mystery',
        description: 'One test showed gas bubbling up when nutrients were added to the soil (like microbes were eating!), but another test found no organic carbon. Scientists realized unusual soil chemicals were reacting, not living bugs.',
        significance: 'Taught scientists that alien chemistry can play tricky games that look like life.',
        todayImpact: 'Helped NASA design the Perseverance rover to drill core samples and bring them back to Earth labs for ultimate proof of ancient life.',
        tag: 'Search for Life'
      },
      {
        title: 'Watching Martian Weather for Three Years',
        description: 'Viking recorded daily winds, air pressure, and freezing temperatures. It proved that in Martian winter, a whole quarter of the planet\'s atmosphere freezes solid into dry ice at the polar caps!',
        significance: 'Created the first long-term weather report from another planet.',
        todayImpact: 'Helps spacecraft engineers calculate atmospheric thickness so new landers don\'t burn up or crash during entry.',
        tag: 'Weather'
      }
    ],
    educationalSummary: 'Viking 1 was the very first spacecraft to land safely on Mars and survive for years. It gave humanity our first look at the real surface of the Red Planet — showing pinkish butterscotch skies, rock-strewn plains, and rusty sand dunes. Even though its radio went quiet in 1982, the historic robot still stands proudly in the sands of Chryse Planitia.',
    thenVsNow: {
      thenTitle: '1976: Stuck in One Spot',
      thenText: 'Viking 1 was completely stationary. It could not move an inch from where it landed, relying on a single 10-foot mechanical arm to scoop the dirt right in front of its body.',
      thenDate: 'July 1976',
      thenImage: 'viking1/img1.jpg',
      nowTitle: 'Today: Super-Smart Mobile Science Rovers',
      nowText: 'Modern rovers like Curiosity and Perseverance roll across dozens of miles, zap rocks with infrared lasers, and fly mini robotic helicopters across the Martian sky!',
      nowDate: 'Present Era',
      nowImage: 'viking1/img2.jpg',
      legacyTakeaway: 'Viking 1 proved that human machines could endure the bitter cold, thin air, and dust storms of Mars for years at a time.',
      successorMissions: ['Mars Pathfinder', 'Curiosity Rover', 'Perseverance Rover']
    },
    heroImage: 'viking1/img1.jpg',
    images: imageManifest.viking1?.images || []
  },

  pathfinder: {
    id: 'pathfinder',
    name: 'Mars Pathfinder',
    tagline: 'The First Wheels on Mars: Sojourner Rover',
    destination: 'Mars',
    destinationGroup: 'mars',
    classification: 'Decommissioned Equipment',
    statusBadge: 'First Robotic Driver',
    statusDescription: 'Landed inside giant bouncing airbags on the 4th of July, 1997. Deployed the microwave-sized Sojourner rover — the first wheeled robot to ever drive on another planet!',
    landingSite: 'Ares Vallis (Ancient Martian Floodplain)',
    coordinates: '19.13° N, 33.22° W',
    dates: {
      launch: '1996-12-04',
      landing: '1997-07-04',
      end: '1997-09-27'
    },
    duration: '83 Martian days (12 times longer than planned!)',
    distance: '497 million km trip from Earth',
    purpose: 'Test a wild new airbag landing system and prove that a tiny solar-powered wheeled rover could drive across the rocks of Mars.',
    quote: {
      text: 'Sojourner has rolled off the ramp. We have wheels on Mars!',
      author: 'Dr. Donna Shirley (NASA Rover Team Leader)'
    },
    equipment: {
      name: 'Carl Sagan Station & Sojourner Rover',
      description: 'A pyramid-shaped lander with petal solar panels and a 23-pound microrover named Sojourner (about the size of a microwave oven!) equipped with six independently motorized wheels and a camera on a stick.',
      fate: 'Resting together in the boulder-strewn floodplain of Ares Vallis. When the lander\'s batteries finally ran out, Sojourner likely circled close to its mothership waiting for instructions.',
      type: 'Airbag Lander & Wheeled Microrover',
      mass: '360 kg lander, 10.6 kg (23 lbs) Sojourner rover',
      powerSource: 'Solar panels on the rover and lander',
      notableInstruments: [
        'Rock-Sniffing Chemical Sensor (APXS)',
        '3D Stereo Mast Cameras',
        'Weather & Wind Station',
        'Rocker-Bogie 6-Wheel Climbing Suspension'
      ]
    },
    keyEvents: [
      {
        date: 'December 4, 1996',
        title: 'Launch on a Delta II Rocket',
        description: 'Mars Pathfinder blasted off from Cape Canaveral, speeding toward Mars on a 7-month interplanetary journey.',
        phase: 'Launch'
      },
      {
        date: 'July 4, 1997',
        title: 'Bouncing Airbag Landing on Independence Day!',
        description: 'Surrounded by giant bubble airbags, Pathfinder plummeted through the atmosphere and bounced 15 times up to 50 feet in the air before rolling to a stop!',
        phase: 'Airbag Landing'
      },
      {
        date: 'July 5, 1997',
        title: 'Rolling Wheels onto Martian Dirt',
        description: 'Sojourner carefully rolled down two metal deployment ramps, becoming the very first machine to roll wheels across another planet!',
        phase: 'First Drive'
      },
      {
        date: 'July–August 1997',
        title: 'Visiting Martian Rocks: "Barnacle Bill" & "Yogi"',
        description: 'Scientists steered Sojourner over to famous boulders nicknamed Barnacle Bill and Yogi Bear, pressing its nose against the rocks to analyze what they were made of.',
        phase: 'Rock Exploration'
      },
      {
        date: 'September 27, 1997',
        title: 'Final Signal from Ares Vallis',
        description: 'After outliving its 7-day warranty by nearly three months, cold night temperatures exhausted the lander\'s main battery.',
        phase: 'End of Mission'
      }
    ],
    discoveries: [
      {
        title: 'Giant Ancient Water Floods on Mars',
        description: 'Pathfinder landed in Ares Vallis, where it photographed rounded river pebbles and tipped-over rocks all pointing downstream — just like after a massive flash flood on Earth!',
        significance: 'Confirmed that billions of years ago, colossal torrents of liquid water roared across the surface of Mars.',
        todayImpact: 'Helped NASA pick ancient river deltas and lakebeds (like Jezero Crater) as the best spots to search for fossilized microbial life.',
        tag: 'Ancient Water'
      },
      {
        title: 'Volcanic Rocks with Silica',
        description: 'Sojourner sniffed a rock named "Barnacle Bill" and found high levels of silica, showing that Mars had volcanoes that melted and recycled crust multiple times.',
        significance: 'Proved Mars had complex, layered volcanic geology rather than just simple basalt lava.',
        todayImpact: 'Helps scientists map the volcanic history of planets throughout our solar system.',
        tag: 'Volcanoes'
      },
      {
        title: 'The Magic 6-Wheel Rocker-Bogie Suspension',
        description: 'Sojourner\'s six wheels were linked with smart hinges so the rover could climb over boulders twice as tall as its wheels without ever tipping over.',
        significance: 'Proved the rocker-bogie design is the absolute best way to build an off-world driving robot.',
        todayImpact: 'Every single NASA Mars rover since — Spirit, Opportunity, Curiosity, and Perseverance — uses this exact same 6-wheel suspension system!',
        tag: 'Robotics'
      }
    ],
    educationalSummary: 'Mars Pathfinder brought the very first rover to another planet: a cute little robot named Sojourner, about the size of a microwave oven! On the 4th of July in 1997, it landed by bouncing across the Martian desert inside giant airbags like a massive beach ball. When the petals opened, Sojourner drove down the ramps and made history, proving that robots could roll across Martian soil.',
    thenVsNow: {
      thenTitle: '1997: A 23-Pound Microwave-Sized Rover',
      thenText: 'Sojourner weighed just 23 pounds (10.6 kg), crawled at a top speed of one centimeter per second, and had to stay within sight of its base station lander.',
      thenDate: 'July 1997',
      thenImage: 'pathfinder/img3.jpg',
      nowTitle: 'Today: Car-Sized Nuclear Rovers & Flying Drones',
      nowText: 'Perseverance is as big as an SUV, weighs over 2,200 pounds, drives itself using AI computer vision, and even brought the Ingenuity helicopter, which flew 72 times on Mars!',
      nowDate: 'Present',
      nowImage: 'pathfinder/img1.jpg',
      legacyTakeaway: 'Sojourner proved that wheeled rovers could conquer the rocky plains of Mars, inspiring every rover mission that followed.',
      successorMissions: ['Spirit & Opportunity', 'Curiosity Rover', 'Perseverance & Ingenuity']
    },
    heroImage: 'pathfinder/img3.jpg',
    images: imageManifest.pathfinder?.images || []
  },

  spirit: {
    id: 'spirit',
    name: 'Spirit (MER-A)',
    tagline: 'The Rover that Unlocked Mars\' Hot Springs',
    destination: 'Mars',
    destinationGroup: 'mars',
    classification: 'Failed Equipment',
    statusBadge: 'Stationary Troy Outpost',
    statusDescription: 'Drove 4.8 miles across Mars over 6 years. When one of its front wheels broke, it dragged it backward — accidentally digging up evidence of ancient boiling hot springs!',
    landingSite: 'Gusev Crater (Columbia Memorial Station)',
    coordinates: '14.5684° S, 175.47263° E',
    dates: {
      launch: '2003-06-10',
      landing: '2004-01-04',
      end: '2010-03-22'
    },
    duration: '6 years, 77 days (outlived its 90-day plan by 24 times!)',
    distance: '7.73 km (4.80 miles)',
    purpose: 'Explore the floor of the giant Gusev Crater to look for clues of ancient lakes and water activity.',
    quote: {
      text: 'Spirit has driven onto a treasure trove. What seemed like a broken wheel turned into one of the greatest findings of our era.',
      author: 'Dr. Steve Squyres (Lead Mission Scientist)'
    },
    equipment: {
      name: 'Mars Exploration Rover Spirit',
      description: 'A golf-cart sized mobile robotic geologist with solar panel wings, a mechanical arm with a rock-grinding drill, color cameras on a tall mast, and six sturdy aluminum wheels.',
      fate: 'Became trapped in hidden soft powdery sand at a site called Troy in 2009. Engineers turned it into a stationary science station, but a bitter Martian winter silenced its solar power in 2010.',
      type: 'Solar-Powered Mobile Robotic Geologist',
      mass: '185 kg (408 lbs)',
      powerSource: 'Solar panels producing up to 900 watt-hours per day',
      notableInstruments: [
        'Panoramic Color Cameras (Pancam)',
        'Rock Abrasion Tool (Grinder Drill)',
        'Microscopic Close-Up Camera',
        'Iron-Sniffing Spectrometer'
      ]
    },
    keyEvents: [
      {
        date: 'June 10, 2003',
        title: 'Launch toward the Red Planet',
        description: 'A Delta II rocket lifted Spirit into the Florida sky to begin its race to Mars.',
        phase: 'Launch'
      },
      {
        date: 'January 4, 2004',
        title: 'Bouncing into Gusev Crater',
        description: 'Protected by giant airbags, Spirit bounced dozens of times across Gusev Crater before coming to rest upright and ready for adventure.',
        phase: 'Landing'
      },
      {
        date: 'March 2006',
        title: 'The Front-Right Wheel Gets Stuck',
        description: 'One of Spirit\'s front wheels jammed permanently. Clever NASA drivers didn\'t give up — they turned Spirit around and drove it backward, dragging the stuck wheel like a plow!',
        phase: 'Engineering Miracle'
      },
      {
        date: 'May 2007',
        title: 'An Accidental Incredible Discovery!',
        description: 'The dragged wheel sliced open the red topsoil, uncovering bright white ground. Tests showed it was 90% pure silica — proof of ancient volcanic hot springs!',
        phase: 'Major Discovery'
      },
      {
        date: 'May 2009',
        title: 'Trapped in the Soft Sands of Troy',
        description: 'Spirit broke through a brittle crust into soft, powdery sulfate sand. Even with spinning wheels, the rover couldn\'t climb free.',
        phase: 'Sand Trap'
      },
      {
        date: 'March 22, 2010',
        title: 'Final Signal Before the Freezing Winter',
        description: 'Unable to angle its solar wings toward the low winter sun, Spirit ran out of power and fell asleep under the stars of Gusev Crater.',
        phase: 'End of Mission'
      }
    ],
    discoveries: [
      {
        title: 'Ancient Volcanic Hot Springs on Mars',
        description: 'When Spirit dragged its broken wheel through the dirt, it uncovered bright white silica identical to the deposits around boiling geysers and hot springs at Yellowstone National Park!',
        significance: 'Proved ancient Mars had warm, bubbling water, steam vents, and volcanic heat — the perfect cozy environment for early life to thrive!',
        todayImpact: 'Made ancient silica deposits one of the highest-priority targets for future missions searching for alien fossils.',
        tag: 'Hot Springs'
      },
      {
        title: 'Spinning Dust Devils Cleaned the Panels',
        description: 'Spirit filmed massive swirling dust tornados dancing across the Martian desert. In a lucky twist, these dust devils occasionally swept right over Spirit, vacuuming the dust off its solar panels!',
        significance: 'Solved the mystery of how solar rovers could survive years past their 90-day design lifespan.',
        todayImpact: 'Helps scientists predict Martian wind patterns and design solar equipment for future astronauts.',
        tag: 'Dust Devils'
      },
      {
        title: 'Climbing Mountains on Mars',
        description: 'Spirit drove all the way up Husband Hill, climbing over 300 feet to reveal rocks formed in mild, non-acidic waters billions of years ago.',
        significance: 'Proved that early Mars had friendly, freshwater environments where life could have survived comfortably.',
        todayImpact: 'Confirmed that Mars wasn\'t always a harsh acid desert — it once had pleasant, freshwater lakes.',
        tag: 'Habitability'
      }
    ],
    educationalSummary: 'Spirit was designed to explore Mars for just 90 days, but the scrappy little robot kept going for more than six years! In 2006, when one of its front wheels locked up, engineers drove Spirit backward, dragging the broken wheel like a garden plow. That dragged wheel accidentally carved open the dirt and uncovered bright white ground — proving Mars once had bubbling volcanic hot springs, just like Yellowstone!',
    thenVsNow: {
      thenTitle: '2004: Hoping for Dust Devils to Clean Solar Wings',
      thenText: 'Spirit depended entirely on the sun. If red dust covered its solar glass, the rover risked freezing to death in the cold winter nights.',
      thenDate: '2004–2010',
      thenImage: 'spirit/img1.jpg',
      nowTitle: 'Today: Nuclear-Powered All-Weather Rovers',
      nowText: 'Modern rovers like Curiosity and Perseverance carry nuclear batteries that generate steady heat and electricity day and night, ignoring dust storms and freezing winters.',
      nowDate: 'Present',
      nowImage: 'spirit/img3.jpg',
      legacyTakeaway: 'Spirit showed that ingenuity and a "never-give-up" attitude can turn a broken wheel into one of the greatest space discoveries in history.',
      successorMissions: ['Opportunity Rover', 'Curiosity Rover', 'Mars Sample Return']
    },
    heroImage: 'spirit/img1.jpg',
    images: imageManifest.spirit?.images || []
  },

  opportunity: {
    id: 'opportunity',
    name: 'Opportunity (MER-B)',
    tagline: 'The Marathon Runner of Another World',
    destination: 'Mars',
    destinationGroup: 'mars',
    classification: 'Decommissioned Equipment',
    statusBadge: 'Perseverance Valley Hero',
    statusDescription: 'Drove 28.06 miles across Mars over nearly 15 years — completing a full Olympic marathon on another planet before a monster dust storm darkened the sky in 2018.',
    landingSite: 'Meridiani Planum (Eagle Crater)',
    coordinates: '1.9483° S, 354.47417° E',
    dates: {
      launch: '2003-07-07',
      landing: '2004-01-25',
      end: '2018-06-10'
    },
    duration: '14 years, 138 days (59 times longer than planned!)',
    distance: '45.16 km (28.06 miles) — The all-time space driving record!',
    purpose: 'Search for rocks and minerals that formed in ancient liquid water on the plains of Meridiani Planum.',
    quote: {
      text: 'My battery is low and it\'s getting dark.',
      author: 'Opportunity\'s final telemetry status (June 10, 2018)'
    },
    equipment: {
      name: 'Mars Exploration Rover Opportunity',
      description: 'The twin sister rover to Spirit, featuring a 6-wheel rocker-bogie chassis, solar wings, microscopic cameras, rock grinder tools, and an unstoppable adventurous spirit.',
      fate: 'Resting on the rim of Endeavour Crater in Perseverance Valley. A colossal planet-wide dust storm blocked out 99% of sunlight in June 2018, causing its batteries to finally run dry.',
      type: 'Solar-Powered Mobile Robotic Geologist',
      mass: '185 kg (408 lbs)',
      powerSource: 'Solar panels',
      notableInstruments: [
        'Panoramic Color Eyes (Pancam)',
        'Microscopic Hand-Lens Camera',
        'Rock-Drilling Grinder (RAT)',
        'Iron Mineral Spectrometer'
      ]
    },
    keyEvents: [
      {
        date: 'July 7, 2003',
        title: 'Launch on a Delta II Heavy Rocket',
        description: 'Opportunity launched three weeks after its twin sister Spirit, racing toward the opposite side of Mars.',
        phase: 'Launch'
      },
      {
        date: 'January 25, 2004',
        title: 'An Interplanetary "Hole-in-One" Landing!',
        description: 'Opportunity bounced across the plains inside airbags and rolled straight down into Eagle Crater, stopping right in front of striped layered bedrock!',
        phase: 'Landing'
      },
      {
        date: 'March 2004',
        title: 'Finding Martian "Blueberries"',
        description: 'Opportunity discovered billions of tiny, shiny grey beads scattered across the dirt. Nicknamed "blueberries," they were hematite mineral spheres that grew in liquid water!',
        phase: 'Major Discovery'
      },
      {
        date: '2004–2010',
        title: 'Exploring Monster Craters: Endurance & Victoria',
        description: 'Opportunity daringly drove down steep rocky slopes into giant craters, inspecting millions of years of ancient geological layers.',
        phase: 'Crater Exploration'
      },
      {
        date: 'March 24, 2015',
        title: 'First Marathon Run on Another World!',
        description: 'Opportunity crossed 26.2 miles of driving distance — completing the very first official marathon on another celestial body in human history!',
        phase: 'World Record'
      },
      {
        date: 'June 10, 2018',
        title: 'The Great Planet-Wide Dust Storm',
        description: 'A monster dust storm choked the Martian atmosphere, turning noon into night. Opportunity sent its final signal from Perseverance Valley before slipping into eternal rest.',
        phase: 'End of Mission'
      }
    ],
    discoveries: [
      {
        title: 'Martian "Blueberries" Proved Ancient Lakes',
        description: 'Opportunity found tiny round mineral balls (hematite) embedded in the rocks. On Earth, these only form when groundwater soaks through porous stone over thousands of years!',
        significance: 'Gave scientists the very first absolute, undeniable proof that liquid water once pooled and flowed across the surface of Mars.',
        todayImpact: 'Ended a 100-year scientific debate and proved Mars was once warm, wet, and habitable.',
        tag: 'Ancient Water'
      },
      {
        title: 'Pure Freshwater Veins at Endeavour Crater',
        description: 'Opportunity scraped open a rock named "Esperance" and found clay minerals that formed in mild, drinkable freshwater rather than harsh acid.',
        significance: 'Showed that early Mars had friendly fresh water that would have been safe enough to drink!',
        todayImpact: 'Helped scientists identify the timeline of when Mars transitioned from a wet, watery world into a dry desert.',
        tag: 'Astrobiology'
      },
      {
        title: 'Finding Meteorites on Another Planet',
        description: 'While driving across the flat plains, Opportunity stumbled across shiny iron-nickel space rocks that had crashed into Mars from the asteroid belt.',
        significance: 'Allowed scientists to study how meteorites weather and rust in the thin Martian air.',
        todayImpact: 'Tells scientists how many space rocks have struck Mars over hundreds of millions of years.',
        tag: 'Meteorites'
      }
    ],
    educationalSummary: 'Opportunity was only expected to survive for 90 days and drive about 600 yards. Instead, it explored Mars for nearly 15 years and drove more than 28 miles — the distance of a full Olympic marathon! It discovered that ancient Mars had lakes of water where life could have lived, before a massive planet-wide dust storm finally dimmed its solar wings in 2018.',
    thenVsNow: {
      thenTitle: '2004: Designed for a 90-Day Sprint',
      thenText: 'Engineers expected dust buildup to choke Opportunity\'s solar wings within three months. Instead, friendly Martian breezes swept the dust away again and again.',
      thenDate: '2004–2018',
      thenImage: 'opportunity/img1.jpg',
      nowTitle: 'Today: Tire Tracks Visible from Space',
      nowText: 'Today, Opportunity\'s tire tracks across the red plains are still visible in satellite photos from Mars orbit. It proved robotic explorers can become legendary field scientists.',
      nowDate: 'Present Era',
      nowImage: 'opportunity/img3.jpg',
      legacyTakeaway: 'Opportunity holds the off-world driving record at 28 miles, proving that human robots can explore other planets for generations.',
      successorMissions: ['Curiosity Rover', 'Perseverance Rover', 'ExoMars Rover']
    },
    heroImage: 'opportunity/img1.jpg',
    images: imageManifest.opportunity?.images || []
  },

  phoenix: {
    id: 'phoenix',
    name: 'Phoenix Mars Lander',
    tagline: 'Digging into the Frozen Arctic Ice of Mars',
    destination: 'Mars',
    destinationGroup: 'mars',
    classification: 'Decommissioned Equipment',
    statusBadge: 'Arctic Ice Witness',
    statusDescription: 'Landed near the Martian north pole in 2008. Scraped away red dirt with its robotic backhoe scoop and found brilliant white sheets of pure water ice buried just inches below!',
    landingSite: 'Green Valley (Vastitas Borealis Arctic Plain)',
    coordinates: '68.2188° N, 234.2508° E',
    dates: {
      launch: '2007-08-04',
      landing: '2008-05-25',
      end: '2008-11-02'
    },
    duration: '5 months, 8 days in the freezing Martian arctic',
    distance: '679 million km flight path from Earth',
    purpose: 'Land in the freezing arctic plains of Mars, dig down with a robotic scoop, find buried water ice, and check if polar soil could support living microbes.',
    quote: {
      text: 'We have ice! It\'s not dry ice, it\'s water ice. We have found water on Mars.',
      author: 'Dr. Peter Smith (Lead Mission Scientist, University of Arizona)'
    },
    equipment: {
      name: 'Phoenix Arctic Lander',
      description: 'A stationary three-legged lander with two circular fan-shaped solar panels, an 8-foot backhoe digging arm, miniature chemistry ovens, and a green weather laser pointing at the clouds.',
      fate: 'Resting in the arctic polygon plains of Vastitas Borealis. During the brutal polar winter, miles of carbon dioxide dry ice frost buried the lander, cracking its solar panels under heavy ice.',
      type: 'Polar Robotic Trenching Lander',
      mass: '350 kg (772 lbs)',
      powerSource: 'Twin circular solar panel wings (400 watts peak)',
      notableInstruments: [
        '8-Foot Robotic Digging Arm & Drill',
        'Miniature Heating Ovens (TEGA)',
        'Wet Chemistry Test Tubes',
        'Atmospheric Weather Laser (LIDAR)'
      ]
    },
    keyEvents: [
      {
        date: 'August 4, 2007',
        title: 'Launch toward the Martian Arctic',
        description: 'Phoenix launched from Cape Canaveral, aiming for the icy, uncharted northern plains of Mars.',
        phase: 'Launch'
      },
      {
        date: 'May 25, 2008',
        title: 'Pulsing Thruster Touchdown on the Ice Plains',
        description: 'Using radar and pulsed rocket engines, Phoenix touched down smoothly on the polygon-cracked permafrost of Vastitas Borealis.',
        phase: 'Landing'
      },
      {
        date: 'June 15–19, 2008',
        title: 'The Mystery of the Disappearing White Chunks!',
        description: 'Phoenix dug a trench named "Dodo-Goldilocks" and found bright white dice-sized chunks. Over four days in the sun, the chunks vanished into gas — proving they were real water ice!',
        phase: 'Historic Discovery'
      },
      {
        date: 'July 2008',
        title: 'Finding Perchlorate Salts in the Dirt',
        description: 'Phoenix dissolved dirt in onboard water tubes and discovered perchlorates — natural salts that lower the freezing point of water.',
        phase: 'Major Discovery'
      },
      {
        date: 'November 2, 2008',
        title: 'The Polar Night Arrives',
        description: 'With the sun sinking below the arctic horizon and dry ice creeping across the plains, Phoenix sent its final signal before winter darkness set in.',
        phase: 'End of Mission'
      }
    ],
    discoveries: [
      {
        title: 'Pure Water Ice Just Inches Below the Dirt',
        description: 'Phoenix scraped just two inches under the red dust and hit rock-hard sheets of pure white water ice. In the thin air and sunlight, the ice slowly evaporated straight into vapor!',
        significance: 'Confirmed that huge underground glaciers of freshwater exist right beneath the surface across giant regions of Mars.',
        todayImpact: 'NASA uses Phoenix\'s data to map underground ice fields where future astronauts can dig up drinking water and create rocket fuel.',
        tag: 'Water Ice'
      },
      {
        title: 'Snow Falling from Martian Clouds',
        description: 'Phoenix pointed a green laser into the Martian sky and recorded real snow falling from high-altitude clouds, evaporating before reaching the freezing desert ground.',
        significance: 'Proved that Mars still has an active water cycle with real weather, clouds, and snowstorms today!',
        todayImpact: 'Helps scientists build super-accurate computer simulations of Mars\' climate and seasons.',
        tag: 'Weather'
      },
      {
        title: 'Perchlorate Salts in the Soil',
        description: 'Discovered that the soil contains special salts called perchlorates, which act like natural antifreeze to keep water liquid at freezing temperatures.',
        significance: 'Explained the chemical reactions seen during earlier Viking missions.',
        todayImpact: 'Future astronauts might harvest perchlorates to make oxygen and rocket propellant, though they must filter it carefully from greenhouse gardens.',
        tag: 'Chemistry'
      }
    ],
    educationalSummary: 'Phoenix traveled all the way to Mars\' freezing north pole to dig into the ground with a robotic backhoe. Just a couple of inches down, its metal scoop hit shiny, solid water ice! It proved that Mars has giant sheets of frozen freshwater buried right under the red dust — like a hidden frozen ocean that future human astronauts might one day dig up and drink.',
    thenVsNow: {
      thenTitle: '2008: Digging Blindly into Frozen Permafrost',
      thenText: 'Phoenix had to carefully scrape into arctic permafrost to check satellite hints of ice, physically dropping icy crumbs into onboard test ovens.',
      thenDate: 'May–Nov 2008',
      thenImage: 'phoenix/img1.jpg',
      nowTitle: 'Today: Global Water Maps for Astronaut Bases',
      nowText: 'Today, NASA combines radar satellite scans and Phoenix ground data to map buried ice within 3 feet of the surface for future human landing sites.',
      nowDate: 'Current Era',
      nowImage: 'phoenix/img3.jpg',
      legacyTakeaway: 'Phoenix proved that water ice is readily accessible just below the surface across millions of square miles of Mars.',
      successorMissions: ['Mars Reconnaissance Orbiter (SHARAD)', 'SWIM Water Ice Mapping', 'Future Human Mars Landings']
    },
    heroImage: 'phoenix/img1.jpg',
    images: imageManifest.phoenix?.images || []
  },

  voyager1: {
    id: 'voyager1',
    name: 'Voyager 1',
    tagline: 'Humanity\'s Farthest Traveler in Interstellar Space',
    destination: 'Interstellar Space',
    destinationGroup: 'deep-space',
    classification: 'Operational Spacecraft',
    statusBadge: 'Active in the Interstellar Void',
    statusDescription: 'Crossed beyond the Sun\'s magnetic bubble into interstellar space in 2012. Currently over 15 billion miles (24 billion km) from Earth, still whispering data back to NASA!',
    landingSite: 'The Space Between the Stars (Ophiuchus constellation direction)',
    coordinates: 'Right Ascension: 17h 16m, Declination: +12° 01\'',
    dates: {
      launch: '1977-09-05',
      end: null
    },
    duration: 'Active for over 49 continuous years and still flying!',
    distance: 'Over 24.3 billion km (more than 162 times Earth-Sun distance)',
    purpose: 'Fly past Jupiter and Saturn to take close-up photos of giant storms and rings, then fly outward to explore the outer edge of our Sun\'s realm.',
    quote: {
      text: 'Look again at that dot. That\'s here. That\'s home. That\'s us. On it everyone you love, everyone you know...',
      author: 'Carl Sagan (on the famous Pale Blue Dot photo taken by Voyager 1)'
    },
    equipment: {
      name: 'Voyager 1 Deep Space Probe & The Golden Record',
      description: 'A 1,600-pound spacecraft centered around a 12-foot dish antenna, powered by three nuclear plutonium batteries, carrying a gold-plated copper phonograph record filled with Earth\'s sounds, animal calls, and music.',
      fate: 'Zooming through the interstellar void at about 38,000 miles per hour. Even after its nuclear power finally runs out in the late 2020s, it will sail silently through the Milky Way galaxy for millions of years.',
      type: 'Interstellar Deep Space Probe',
      mass: '722 kg (1,592 lbs)',
      powerSource: 'Three nuclear radioisotope thermoelectric generators (RTGs)',
      notableInstruments: [
        'Cosmic Ray Particle Sensor',
        'Magnetic Field Sensor (Magnetometer)',
        'Radio Plasma Wave Antenna',
        'The Golden Record (Message in a Bottle to the Cosmos)'
      ]
    },
    keyEvents: [
      {
        date: 'September 5, 1977',
        title: 'Launch on a Giant Titan Rocket',
        description: 'Voyager 1 rocketed into space from Florida, taking advantage of a rare planetary alignment that happens only once every 175 years!',
        phase: 'Launch'
      },
      {
        date: 'March 5, 1979',
        title: 'Jupiter Encounter & Flying Volcanoes on Io',
        description: 'Flew past Jupiter and spotted giant umbrella-shaped volcanic eruptions shooting hundreds of miles into space from moon Io — the first active volcanoes ever seen outside Earth!',
        phase: 'Jupiter Flyby'
      },
      {
        date: 'November 12, 1980',
        title: 'Saturn & Its Mysterious Orange Moon Titan',
        description: 'Soared past Saturn\'s dazzling ring system and discovered that moon Titan has an ultra-thick orange nitrogen atmosphere.',
        phase: 'Saturn Flyby'
      },
      {
        date: 'February 14, 1990',
        title: 'The Famous "Pale Blue Dot" Family Portrait',
        description: 'From 3.7 billion miles away, Voyager turned its camera around to take a final snapshot of Earth. Our entire planet appeared as a tiny, lonely blue speck suspended in a sunbeam.',
        phase: 'Pale Blue Dot'
      },
      {
        date: 'August 25, 2012',
        title: 'Crossing into Interstellar Space!',
        description: 'Voyager detected solar wind particles dropping to zero as cosmic rays from deep space surged — becoming the very first human machine to enter interstellar space!',
        phase: 'Interstellar Crossing'
      }
    ],
    discoveries: [
      {
        title: 'Active Volcanoes on Jupiter\'s Moon Io',
        description: 'Voyager photographed giant plumes of glowing sulfur erupting hundreds of miles above moon Io. Scientists were shocked to learn a tiny frozen moon could be a raging volcanic world!',
        significance: 'Proved that gravity tug-of-wars (tidal heating) can keep small moons boiling hot inside.',
        todayImpact: 'Helped scientists realize that icy moons like Europa and Enceladus have warm underground oceans where life could live.',
        tag: 'Alien Volcanoes'
      },
      {
        title: 'Crossing the Boundary of Our Solar System',
        description: 'In August 2012, Voyager\'s sensors detected the Sun\'s magnetic bubble ending and cold interstellar space beginning, measuring the density of cosmic space for the very first time.',
        significance: 'Made history as humanity\'s first physical crossing into the space between the stars.',
        todayImpact: 'Gives astrophysicists real data about what lies outside our solar neighborhood.',
        tag: 'Deep Space'
      },
      {
        title: 'The Pale Blue Dot: Our Fragile Home',
        description: 'Voyager took a photo of Earth from nearly 4 billion miles away. Earth looked like a tiny speck of dust caught in a ray of light, reminding everyone how precious and small our world is.',
        significance: 'Changed how humanity views our planet and inspired generations to protect our home world.',
        todayImpact: 'Remains the most famous and inspiring space photo ever taken.',
        tag: 'Earth from Space'
      }
    ],
    educationalSummary: 'Voyager 1 is the farthest machine humanity has ever sent into the universe! Launched in 1977, it flew past Jupiter and Saturn, and in 2012, it crossed the boundary of our solar system into interstellar space — the deep void between the stars. It carries a golden phonograph record with Earth\'s sounds, music, and greetings, like a message in a bottle sailing through the galaxy for eternity.',
    thenVsNow: {
      thenTitle: '1977: 8-Track Magnetic Tapes & Tiny Memory',
      thenText: 'Voyager 1 runs on just 69 kilobytes of computer memory on 8-track magnetic tape recorders — millions of times less memory than a modern smartphone!',
      thenDate: 'September 1977',
      thenImage: 'voyager1/img2.jpg',
      nowTitle: 'Today: Whispering Across 15 Billion Miles',
      nowText: 'Today, Voyager\'s radio signals take over 22.5 hours traveling at the speed of light to cross the 15 billion miles back to giant NASA dish antennas on Earth.',
      nowDate: 'Still Transmitting Today',
      nowImage: 'voyager1/img3.jpg',
      legacyTakeaway: 'Voyager 1 is humanity\'s immortal messenger: long after Earth changes, it will glide silently through the Milky Way for millions of years.',
      successorMissions: ['Voyager 2', 'New Horizons (Pluto)', 'Interstellar Probe Concept']
    },
    heroImage: 'voyager1/img2.jpg',
    images: imageManifest.voyager1?.images || []
  },

  cassini: {
    id: 'cassini',
    name: 'Cassini-Huygens',
    tagline: 'Saturn\'s Majestic Explorer and Ring Guardian',
    destination: 'Saturn',
    destinationGroup: 'deep-space',
    classification: 'Completed Mission (Controlled Disposal)',
    statusBadge: 'Vaporized in Saturn\'s Clouds',
    statusDescription: 'Spent 13 magical years orbiting Saturn. Discovered underground oceans spraying geysers into space, then dove into Saturn\'s clouds on purpose to protect those alien oceans!',
    landingSite: 'Upper Atmosphere Cloud Deck of Saturn',
    coordinates: 'Equatorial cloud layers of Saturn',
    dates: {
      launch: '1997-10-15',
      end: '2017-09-15'
    },
    duration: '20 years of flight; 13 years exploring Saturn',
    distance: '7.9 billion km total flight path',
    purpose: 'Orbit Saturn to photograph its shimmering rings, study its massive storms, and land a probe on giant moon Titan to see what was hiding under its orange clouds.',
    quote: {
      text: 'To protect the pristine, ocean-bearing moons of Enceladus and Titan, Cassini will give its own life in the clouds of Saturn.',
      author: 'Dr. Earl Maize (Cassini Mission Director, NASA JPL)'
    },
    equipment: {
      name: 'Cassini Orbiter & ESA Huygens Titan Probe',
      description: 'A two-story tall, 6-ton flagship space laboratory with 12 advanced scientific instruments, radar mappers, and the European Huygens lander probe.',
      fate: 'Intentionally steered to plunge into Saturn\'s crushing atmosphere at 77,000 miles per hour on September 15, 2017. It vaporized like a shooting star to keep Earth germs away from Saturn\'s ocean moons.',
      type: 'Flagship Planetary Orbiter & Atmospheric Probe',
      mass: '5,712 kg (about 12,593 lbs) at launch',
      powerSource: 'Three nuclear radioisotope power generators (RTGs)',
      notableInstruments: [
        'Cosmic Dust & Ice Analyzer',
        'High-Resolution Ring Cameras',
        'Radar Cloud Penetrator',
        'European Huygens Moon Lander'
      ]
    },
    keyEvents: [
      {
        date: 'October 15, 1997',
        title: 'Launch on a Colossal Titan IVB Rocket',
        description: 'Cassini blasted off on a giant 7-year voyage, looping past Venus, Earth, and Jupiter to build up speed with gravity assists.',
        phase: 'Launch'
      },
      {
        date: 'July 1, 2004',
        title: 'Slipping into Orbit Through Saturn\'s Rings',
        description: 'Fired its main engine to thread the needle between Saturn\'s F and G rings, becoming the first spacecraft in history to orbit Saturn.',
        phase: 'Saturn Orbit'
      },
      {
        date: 'January 14, 2005',
        title: 'Landing on Titan: Alien Methane Rain and Rivers!',
        description: 'The Huygens probe parachuted through orange smog to land on pebble-covered riverbeds on moon Titan — discovering lakes and rain of liquid methane!',
        phase: 'Titan Landing'
      },
      {
        date: 'July 2005',
        title: 'Giant Water Geysers on Tiny Moon Enceladus',
        description: 'Cassini zoomed close to icy moon Enceladus and photographed towering geysers of salt water and ice crystals erupting from cracks in its south pole!',
        phase: 'Historic Discovery'
      },
      {
        date: 'April–September 2017',
        title: 'The Grand Finale: 22 Dives Through the Rings',
        description: 'Cassini danced 22 daring times through the unexplored 1,200-mile gap between Saturn and its innermost rings at supersonic speeds.',
        phase: 'The Grand Finale'
      },
      {
        date: 'September 15, 2017',
        title: 'The Heroic Dive into Saturn\'s Atmosphere',
        description: 'Plunged into Saturn\'s clouds at 77,000 mph, firing thrusters to send live data until the extreme heat vaporized the loyal probe like a meteor.',
        phase: 'Sacrificial Dive'
      }
    ],
    discoveries: [
      {
        title: 'A Warm Underground Ocean on Enceladus',
        description: 'Cassini flew directly through the icy geysers of moon Enceladus and tasted water vapor, salt, and organic molecules coming from boiling hydrothermal vents at the bottom of a hidden ocean!',
        significance: 'Made Enceladus the single most promising place in our entire solar system to search for living alien microbes today!',
        todayImpact: 'Inspired NASA to design the upcoming Enceladus Orbilander mission to look for signs of life in its plumes.',
        tag: 'Ocean Worlds'
      },
      {
        title: 'Lakes and Rainstorms of Liquid Methane on Titan',
        description: 'Cassini mapped huge oceans and lakes on moon Titan made of liquid methane and ethane! Titan has rain, rivers, sand dunes, and clouds — just with liquid natural gas instead of water!',
        significance: 'Titan is the only world besides Earth with active liquid lakes and rainstorms on its surface.',
        todayImpact: 'Inspired NASA\'s Dragonfly mission, an 8-rotor flying drone designed to soar through Titan\'s thick air.',
        tag: 'Titan Lakes'
      },
      {
        title: 'Saturn\'s Living, Dancing Rings',
        description: 'Cassini discovered that Saturn\'s rings are not solid, but made of billions of chunks of pure water ice from dust-specks to house-sized boulders, pushed into vertical waves by shepherd moons.',
        significance: 'Showed that the rings are relatively young and slowly raining down into Saturn\'s atmosphere.',
        todayImpact: 'Helped astronomers understand how planets form from discs of dust and ice around newborn stars.',
        tag: 'Saturn Rings'
      }
    ],
    educationalSummary: 'Cassini spent 13 magnificent years exploring Saturn. It discovered that tiny icy moons like Enceladus have warm underground oceans spraying giant geysers of water into space, and that giant moon Titan has rainstorms and lakes of liquid methane! When its fuel ran low in 2017, scientists deliberately steered Cassini to burn up in Saturn\'s clouds so it would never accidentally crash into those pristine ocean moons and contaminate them with Earth germs.',
    thenVsNow: {
      thenTitle: '2004: Entering Saturn\'s Mysterious Shadow',
      thenText: 'When Cassini arrived at Saturn in 2004, the rings and icy moons were shadowy mysteries seen only through blurry telescope lenses from Earth.',
      thenDate: 'July 2004',
      thenImage: 'cassini/img2.jpg',
      nowTitle: '2017: The Grand Finale & Heroic Sacrifice',
      nowText: 'Rather than leaving Cassini as dead space junk, NASA steered it on a fiery dive into Saturn\'s clouds — a deliberate sacrifice to protect the ocean worlds it discovered.',
      nowDate: 'September 2017',
      nowImage: 'cassini/img1.jpg',
      legacyTakeaway: 'Cassini showed that protecting alien habitats and preserving pristine ocean worlds must guide humanity\'s journey into the stars.',
      successorMissions: ['Dragonfly Drone to Titan', 'Europa Clipper', 'Enceladus Orbilander']
    },
    heroImage: 'cassini/img1.jpg',
    images: imageManifest.cassini?.images || []
  }
};

export const destinationGroups = [
  {
    id: 'all',
    name: 'All Destinations',
    count: 9,
    description: 'Nine milestone missions that pushed human exploration across the solar system.'
  },
  {
    id: 'moon',
    name: 'The Moon',
    count: 2,
    description: 'Earth\'s closest celestial neighbor, holding humanity\'s first footsteps and robotic time capsules.'
  },
  {
    id: 'mars',
    name: 'Mars Surface',
    count: 5,
    description: 'The Red Planet, where robotic landers and rovers unlocked ancient water, ice, and hot springs.'
  },
  {
    id: 'deep-space',
    name: 'Saturn & Deep Space',
    count: 2,
    description: 'Outer planetary giants and the interstellar frontier beyond the boundary of our Sun.'
  }
];

export const MISSION_ORDER = [
  'apollo11',
  'surveyor3',
  'viking1',
  'pathfinder',
  'spirit',
  'opportunity',
  'phoenix',
  'voyager1',
  'cassini'
] as const;

export type MissionId = typeof MISSION_ORDER[number];
