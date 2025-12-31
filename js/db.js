const autos = [
	// --- FIAT ---
	{
		marca: 'Fiat',
		modelo: 'Cronos',
		year: 2020,
		precio: 15500000,
		puertas: 4,
		color: 'Gris',
		transmision: 'manual'
	},
	{
		marca: 'Fiat',
		modelo: 'Argo',
		year: 2021,
		precio: 17200000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Fiat',
		modelo: '500',
		year: 2022,
		precio: 22000000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Fiat',
		modelo: 'Pulse',
		year: 2023,
		precio: 29500000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'Fiat',
		modelo: 'Fastback',
		year: 2024,
		precio: 34000000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Fiat',
		modelo: 'Mobi',
		year: 2020,
		precio: 11500000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'manual'
	},
	{
		marca: 'Fiat',
		modelo: 'Strada',
		year: 2021,
		precio: 19800000,
		puertas: 2,
		color: 'Gris',
		transmision: 'manual'
	},
	{
		marca: 'Fiat',
		modelo: 'Toro',
		year: 2022,
		precio: 38000000,
		puertas: 4,
		color: 'Bordeaux',
		transmision: 'automatico'
	},
	{
		marca: 'Fiat',
		modelo: 'Cronos Precision',
		year: 2023,
		precio: 21000000,
		puertas: 4,
		color: 'Plata',
		transmision: 'automatico'
	},
	{
		marca: 'Fiat',
		modelo: '500 Abarth',
		year: 2024,
		precio: 45000000,
		puertas: 2,
		color: 'Gris',
		transmision: 'manual'
	},

	// --- PEUGEOT ---
	{
		marca: 'Peugeot',
		modelo: '208',
		year: 2020,
		precio: 16800000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'manual'
	},
	{
		marca: 'Peugeot',
		modelo: '2008',
		year: 2021,
		precio: 25500000,
		puertas: 4,
		color: 'Gris',
		transmision: 'automatico'
	},
	{
		marca: 'Peugeot',
		modelo: '3008',
		year: 2022,
		precio: 52000000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'Peugeot',
		modelo: '208 GT',
		year: 2023,
		precio: 38500000,
		puertas: 2,
		color: 'Amarillo',
		transmision: 'manual'
	},
	{
		marca: 'Peugeot',
		modelo: 'Partner',
		year: 2024,
		precio: 28000000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'manual'
	},
	{
		marca: 'Peugeot',
		modelo: '5008',
		year: 2020,
		precio: 44000000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Peugeot',
		modelo: '208 Feline',
		year: 2021,
		precio: 22000000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Peugeot',
		modelo: 'RCZ',
		year: 2022,
		precio: 49000000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'manual'
	},
	{
		marca: 'Peugeot',
		modelo: 'Expert',
		year: 2023,
		precio: 35000000,
		puertas: 4,
		color: 'Plata',
		transmision: 'manual'
	},
	{
		marca: 'Peugeot',
		modelo: '208 Roadtrip',
		year: 2024,
		precio: 31000000,
		puertas: 4,
		color: 'Azul',
		transmision: 'manual'
	},

	// --- TOYOTA ---
	{
		marca: 'Toyota',
		modelo: 'Etios',
		year: 2020,
		precio: 14500000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'manual'
	},
	{
		marca: 'Toyota',
		modelo: 'Corolla',
		year: 2021,
		precio: 28000000,
		puertas: 4,
		color: 'Gris',
		transmision: 'automatico'
	},
	{
		marca: 'Toyota',
		modelo: '86',
		year: 2022,
		precio: 55000000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Toyota',
		modelo: 'Hilux GR',
		year: 2023,
		precio: 72000000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Toyota',
		modelo: 'Yaris',
		year: 2024,
		precio: 24500000,
		puertas: 4,
		color: 'Negro',
		transmision: 'manual'
	},
	{
		marca: 'Toyota',
		modelo: 'Camry',
		year: 2020,
		precio: 42000000,
		puertas: 4,
		color: 'Gris',
		transmision: 'automatico'
	},
	{
		marca: 'Toyota',
		modelo: 'Corolla Cross',
		year: 2021,
		precio: 39500000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'Toyota',
		modelo: 'Celica Retro',
		year: 2022,
		precio: 35000000,
		puertas: 2,
		color: 'Amarillo',
		transmision: 'manual'
	},
	{
		marca: 'Toyota',
		modelo: 'SW4',
		year: 2023,
		precio: 85000000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Toyota',
		modelo: 'RAV4',
		year: 2024,
		precio: 68000000,
		puertas: 4,
		color: 'Plata',
		transmision: 'automatico'
	},

	// --- RENAULT ---
	{
		marca: 'Renault',
		modelo: 'Kwid',
		year: 2020,
		precio: 12000000,
		puertas: 4,
		color: 'Naranja',
		transmision: 'manual'
	},
	{
		marca: 'Renault',
		modelo: 'Sandero RS',
		year: 2021,
		precio: 18500000,
		puertas: 4,
		color: 'Negro',
		transmision: 'manual'
	},
	{
		marca: 'Renault',
		modelo: 'Alaskan',
		year: 2022,
		precio: 48000000,
		puertas: 4,
		color: 'Gris',
		transmision: 'automatico'
	},
	{
		marca: 'Renault',
		modelo: 'Megane IV',
		year: 2023,
		precio: 42000000,
		puertas: 2,
		color: 'Azul',
		transmision: 'manual'
	},
	{
		marca: 'Renault',
		modelo: 'Duster',
		year: 2024,
		precio: 33000000,
		puertas: 4,
		color: 'Verde',
		transmision: 'automatico'
	},
	{
		marca: 'Renault',
		modelo: 'Stepway',
		year: 2020,
		precio: 15800000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Renault',
		modelo: 'Logan',
		year: 2021,
		precio: 14900000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Renault',
		modelo: 'Koleos',
		year: 2022,
		precio: 55000000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Renault',
		modelo: 'Clio Sport',
		year: 2023,
		precio: 38000000,
		puertas: 2,
		color: 'Amarillo',
		transmision: 'manual'
	},
	{
		marca: 'Renault',
		modelo: 'Oroch',
		year: 2024,
		precio: 31000000,
		puertas: 4,
		color: 'Gris',
		transmision: 'manual'
	},

	// --- FORD ---
	{
		marca: 'Ford',
		modelo: 'Ka',
		year: 2020,
		precio: 13500000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'manual'
	},
	{
		marca: 'Ford',
		modelo: 'Ranger',
		year: 2021,
		precio: 52000000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'Ford',
		modelo: 'Mustang Shelby',
		year: 2022,
		precio: 125000000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Ford',
		modelo: 'Territory',
		year: 2023,
		precio: 48000000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Ford',
		modelo: 'Maverick',
		year: 2024,
		precio: 45000000,
		puertas: 4,
		color: 'Gris',
		transmision: 'automatico'
	},
	{
		marca: 'Ford',
		modelo: 'EcoSport',
		year: 2020,
		precio: 19500000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Ford',
		modelo: 'F-150 Lariat',
		year: 2021,
		precio: 98000000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Ford',
		modelo: 'Puma',
		year: 2022,
		precio: 38000000,
		puertas: 4,
		color: 'Azul',
		transmision: 'manual'
	},
	{
		marca: 'Ford',
		modelo: 'Mustang Mach-E',
		year: 2023,
		precio: 95000000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Ford',
		modelo: 'GT',
		year: 2024,
		precio: 210000000,
		puertas: 2,
		color: 'Azul',
		transmision: 'automatico'
	},

	// --- VOLKSWAGEN ---
	{
		marca: 'Volkswagen',
		modelo: 'Gol Trend',
		year: 2020,
		precio: 13200000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'manual'
	},
	{
		marca: 'Volkswagen',
		modelo: 'Taos',
		year: 2021,
		precio: 39500000,
		puertas: 4,
		color: 'Gris',
		transmision: 'automatico'
	},
	{
		marca: 'Volkswagen',
		modelo: 'Scirocco',
		year: 2022,
		precio: 51000000,
		puertas: 2,
		color: 'Azul',
		transmision: 'manual'
	},
	{
		marca: 'Volkswagen',
		modelo: 'Amarok V6',
		year: 2023,
		precio: 72000000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Volkswagen',
		modelo: 'Polo Track',
		year: 2024,
		precio: 22800000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Volkswagen',
		modelo: 'Vento GLI',
		year: 2020,
		precio: 38000000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Volkswagen',
		modelo: 'Nivus',
		year: 2021,
		precio: 29500000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Volkswagen',
		modelo: 'Beetle',
		year: 2022,
		precio: 35000000,
		puertas: 2,
		color: 'Amarillo',
		transmision: 'automatico'
	},
	{
		marca: 'Volkswagen',
		modelo: 'T-Cross',
		year: 2023,
		precio: 33000000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'manual'
	},
	{
		marca: 'Volkswagen',
		modelo: 'Virtus',
		year: 2024,
		precio: 28500000,
		puertas: 4,
		color: 'Gris',
		transmision: 'automatico'
	},

	// --- JEEP ---
	{
		marca: 'Jeep',
		modelo: 'Renegade',
		year: 2020,
		precio: 24500000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Jeep',
		modelo: 'Compass',
		year: 2021,
		precio: 39000000,
		puertas: 4,
		color: 'Gris',
		transmision: 'automatico'
	},
	{
		marca: 'Jeep',
		modelo: 'Wrangler',
		year: 2022,
		precio: 95000000,
		puertas: 2,
		color: 'Verde',
		transmision: 'manual'
	},
	{
		marca: 'Jeep',
		modelo: 'Commander',
		year: 2023,
		precio: 62000000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Jeep',
		modelo: 'Grand Cherokee',
		year: 2024,
		precio: 110000000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Jeep',
		modelo: 'Renegade Trailhawk',
		year: 2020,
		precio: 31000000,
		puertas: 4,
		color: 'Naranja',
		transmision: 'automatico'
	},
	{
		marca: 'Jeep',
		modelo: 'Gladiator',
		year: 2021,
		precio: 105000000,
		puertas: 4,
		color: 'Gris',
		transmision: 'automatico'
	},
	{
		marca: 'Jeep',
		modelo: 'Wrangler Rubicon',
		year: 2022,
		precio: 120000000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Jeep',
		modelo: 'Compass Longitude',
		year: 2023,
		precio: 42000000,
		puertas: 4,
		color: 'Azul',
		transmision: 'manual'
	},
	{
		marca: 'Jeep',
		modelo: 'Avenger',
		year: 2024,
		precio: 38000000,
		puertas: 4,
		color: 'Amarillo',
		transmision: 'manual'
	},

	// --- CHEVROLET ---
	{
		marca: 'Chevrolet',
		modelo: 'Onix Joy',
		year: 2020,
		precio: 12800000,
		puertas: 4,
		color: 'Gris',
		transmision: 'manual'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Cruze',
		year: 2021,
		precio: 26500000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Camaro ZL1',
		year: 2022,
		precio: 135000000,
		puertas: 2,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'S10 High Country',
		year: 2023,
		precio: 65000000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Montana',
		year: 2024,
		precio: 31000000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Spin',
		year: 2020,
		precio: 19000000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'manual'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Equinox',
		year: 2021,
		precio: 42000000,
		puertas: 4,
		color: 'Gris',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Corvette C8',
		year: 2022,
		precio: 185000000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Tracker',
		year: 2023,
		precio: 33000000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Chevrolet',
		modelo: 'Trailblazer',
		year: 2024,
		precio: 75000000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},

	// --- AUDI ---
	{
		marca: 'Audi',
		modelo: 'A1 Sportback',
		year: 2020,
		precio: 35000000,
		puertas: 4,
		color: 'Rojo',
		transmision: 'manual'
	},
	{
		marca: 'Audi',
		modelo: 'A4',
		year: 2021,
		precio: 58000000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'TT RS',
		year: 2022,
		precio: 95000000,
		puertas: 2,
		color: 'Gris',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'Q3 Sportback',
		year: 2023,
		precio: 69000000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'RS6',
		year: 2024,
		precio: 220000000,
		puertas: 4,
		color: 'Gris',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A3 Sedán',
		year: 2020,
		precio: 41000000,
		puertas: 4,
		color: 'Azul',
		transmision: 'manual'
	},
	{
		marca: 'Audi',
		modelo: 'Q5',
		year: 2021,
		precio: 78000000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'R8 V10',
		year: 2022,
		precio: 350000000,
		puertas: 2,
		color: 'Amarillo',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'S3',
		year: 2023,
		precio: 88000000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'Audi',
		modelo: 'A5 Coupé',
		year: 2024,
		precio: 92000000,
		puertas: 2,
		color: 'Azul',
		transmision: 'manual'
	},

	// --- BMW ---
	{
		marca: 'BMW',
		modelo: '118i',
		year: 2020,
		precio: 42000000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'manual'
	},
	{
		marca: 'BMW',
		modelo: '330i',
		year: 2021,
		precio: 75000000,
		puertas: 4,
		color: 'Gris',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'M2',
		year: 2022,
		precio: 125000000,
		puertas: 2,
		color: 'Azul',
		transmision: 'manual'
	},
	{
		marca: 'BMW',
		modelo: 'X5',
		year: 2023,
		precio: 155000000,
		puertas: 4,
		color: 'Negro',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'i4',
		year: 2024,
		precio: 138000000,
		puertas: 4,
		color: 'Blanco',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 2 Coupé',
		year: 2020,
		precio: 58000000,
		puertas: 2,
		color: 'Rojo',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'X1',
		year: 2021,
		precio: 62000000,
		puertas: 4,
		color: 'Gris',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'M4',
		year: 2022,
		precio: 165000000,
		puertas: 2,
		color: 'Negro',
		transmision: 'manual'
	},
	{
		marca: 'BMW',
		modelo: 'Serie 4 Gran Coupé',
		year: 2023,
		precio: 98000000,
		puertas: 4,
		color: 'Azul',
		transmision: 'automatico'
	},
	{
		marca: 'BMW',
		modelo: 'Z4',
		year: 2024,
		precio: 115000000,
		puertas: 2,
		color: 'Blanco',
		transmision: 'automatico'
	}
];