export const jobAds = [
	{
		id: 1,
		category: "Lekarze",
		dateAdded: "2023-08-29",
		title: "Lekarz Specjalista Medycyny Rodzinnej",
		description:
			"Szukamy lekarza specjalisty medycyny rodzinnej do naszej przychodni w Warszawie. Oferujemy atrakcyjne warunki zatrudnienia, pełny etat oraz przyjazne środowisko pracy.",
		contractType: "Pełny etat",
		salary: {
			from: 10000,
			to: 15000,
			currency: "PLN",
			negotiable: true,
		},
		user: {
			username: "klinikaMedicus",
			email: "kontakt@klinikamedicus.pl",
		},
		location: "Warszawa",
		isActive: true,
		expiryDate: "2023-09-29",
	},
	{
		id: 2,
		category: "Farmaceuci",
		dateAdded: "2023-08-15",
		title: "Farmaceuta w aptece miejskiej",
		description:
			"Dołącz do naszego zespołu w nowoczesnej aptece w Krakowie. Oczekujemy doświadczenia i licencji do wykonywania zawodu.",
		contractType: "Pół etatu",
		salary: {
			from: 6500,
			to: 7500,
			currency: "PLN",
			negotiable: false,
		},
		user: {
			username: "aptekaKrakow",
			email: "rekrutacja@aptekakrakow.pl",
		},
		location: "Kraków",
		isActive: true,
		expiryDate: "2023-09-15",
	},
	{
		id: 3,
		category: "Stomatolodzy",
		dateAdded: "2023-08-10",
		title: "Stomatolog ogólny",
		description:
			"Szukamy doświadczonego stomatologa do praktyki w Gdańsku. Elastyczne godziny pracy.",
		contractType: "Kontrakt",
		salary: {
			from: 12000,
			to: 18000,
			currency: "PLN",
			negotiable: true,
		},
		user: {
			username: "dentalClinic",
			email: "kontakt@dentalclinic.pl",
		},
		location: "Gdańsk",
		isActive: true,
		expiryDate: "2023-10-10",
	},
	{
		id: 4,
		category: "Fizjoterapeuci",
		dateAdded: "2023-08-20",
		title: "Specjalista Fizjoterapii",
		description:
			"Zatrudnimy fizjoterapeutę do ośrodka rehabilitacyjnego w Lublinie.",
		contractType: "Pół etatu",
		salary: {
			from: 6000,
			to: 7500,
			currency: "PLN",
			negotiable: false,
		},
		user: {
			username: "rehabCenter",
			email: "hr@rehabcenter.pl",
		},
		location: "Lublin",
		isActive: true,
		expiryDate: "2023-09-20",
	},
	{
		id: 5,
		category: "Psychologowie",
		dateAdded: "2023-08-25",
		title: "Psycholog Kliniczny",
		description:
			"Szukamy psychologa klinicznego do współpracy w poradni psychologicznej w Poznaniu.",
		contractType: "Kontrakt",
		salary: {
			from: 6500,
			to: 8000,
			currency: "PLN",
			negotiable: true,
		},
		user: {
			username: "mindCare",
			email: "office@mindcare.pl",
		},
		location: "Poznań",
		isActive: true,
		expiryDate: "2023-09-25",
	},
	{
		id: 6,
		category: "Pielęgniarki",
		dateAdded: "2023-08-13",
		title: "Starsza Pielęgniarka",
		description:
			"Klinika w Łodzi szuka doświadczonej pielęgniarki na pełen etat.",
		contractType: "Pełny etat",
		salary: {
			from: 5000,
			to: 6000,
			currency: "PLN",
			negotiable: false,
		},
		user: {
			username: "lodzClinic",
			email: "recruitment@lodzclinic.pl",
		},
		location: "Łódź",
		isActive: true,
		expiryDate: "2023-09-13",
	},
	{
		id: 7,
		category: "Położne",
		dateAdded: "2023-08-05",
		title: "Położna w szpitalu",
		description:
			"Szpital w Toruniu poszukuje położnej z co najmniej 3-letnim doświadczeniem.",
		contractType: "Kontrakt",
		salary: {
			from: 5500,
			to: 6700,
			currency: "PLN",
			negotiable: true,
		},
		user: {
			username: "torunHospital",
			email: "hr@torunhospital.pl",
		},
		location: "Toruń",
		isActive: true,
		expiryDate: "2023-09-05",
	},
	{
		id: 8,
		category: "Opiekunowie",
		dateAdded: "2023-08-07",
		title: "Opiekun seniora",
		description: "Dom seniora w Rzeszowie poszukuje opiekuna z doświadczeniem.",
		contractType: "Pół etatu",
		salary: {
			from: 4000,
			to: 5000,
			currency: "PLN",
			negotiable: false,
		},
		user: {
			username: "elderHome",
			email: "apply@elderhome.pl",
		},
		location: "Rzeszów",
		isActive: true,
		expiryDate: "2023-09-07",
	},
	{
		id: 9,
		category: "Farmaceuci",
		dateAdded: "2023-08-16",
		title: "Farmaceuta",
		description: "Apteka w Wrocławiu poszukuje licencjonowanego farmaceuty.",
		contractType: "Pełny etat",
		salary: {
			from: 7000,
			to: 8500,
			currency: "PLN",
			negotiable: true,
		},
		user: {
			username: "wroclawPharmacy",
			email: "info@wroclawpharmacy.pl",
		},
		location: "Wrocław",
		isActive: true,
		expiryDate: "2023-09-16",
	},
	{
		id: 10,
		category: "Fizjoterapeuci",
		dateAdded: "2023-08-12",
		title: "Fizjoterapeuta sportowy",
		description:
			"Klub sportowy w Szczecinie poszukuje doświadczonego fizjoterapeuty sportowego.",
		contractType: "Kontrakt",
		salary: {
			from: 7500,
			to: 9000,
			currency: "PLN",
			negotiable: false,
		},
		user: {
			username: "sportsClub",
			email: "hr@sportsclub.pl",
		},
		location: "Szczecin",
		isActive: true,
		expiryDate: "2023-09-12",
	},
	{
		id: 11,
		category: "Dietetycy",
		dateAdded: "2023-08-18",
		title: "Dietetyk sportowy",
		description:
			"Centrum dietetyczne w Olsztynie poszukuje dietetyka specjalizującego się w diecie sportowców.",
		contractType: "Pół etatu",
		salary: {
			from: 6000,
			to: 7300,
			currency: "PLN",
			negotiable: true,
		},
		user: {
			username: "dietCenter",
			email: "apply@dietcenter.pl",
		},
		location: "Olsztyn",
		isActive: true,
		expiryDate: "2023-09-18",
	},
	{
		id: 12,
		category: "Opiekunowie",
		dateAdded: "2023-08-14",
		title: "Opiekun osób niepełnosprawnych",
		description:
			"Dom opieki w Bydgoszczy poszukuje opiekuna z doświadczeniem w pracy z osobami niepełnosprawnymi.",
		contractType: "Pełny etat",
		salary: {
			from: 4800,
			to: 5700,
			currency: "PLN",
			negotiable: false,
		},
		user: {
			username: "careHouse",
			email: "contact@carehouse.pl",
		},
		location: "Bydgoszcz",
		isActive: true,
		expiryDate: "2023-09-14",
	},
	{
		id: 13,
		category: "Pielęgniarki",
		dateAdded: "2023-08-19",
		title: "Pielęgniarka anestezjologiczna",
		description:
			"Szpital uniwersytecki w Krakowie poszukuje pielęgniarki anestezjologicznej z minimum 2-letnim doświadczeniem.",
		contractType: "Kontrakt",
		salary: {
			from: 6500,
			to: 7800,
			currency: "PLN",
			negotiable: true,
		},
		user: {
			username: "univHospital",
			email: "jobs@univhospital.pl",
		},
		location: "Kraków",
		isActive: true,
		expiryDate: "2023-09-19",
	},
	{
		id: 14,
		category: "Stomatolodzy",
		dateAdded: "2023-08-11",
		title: "Ortodonta",
		description:
			"Nowoczesna praktyka stomatologiczna w Gdyni szuka ortodonty na pełen etat.",
		contractType: "Pełny etat",
		salary: {
			from: 12000,
			to: 14500,
			currency: "PLN",
			negotiable: false,
		},
		user: {
			username: "dentistSea",
			email: "recruit@dentistsea.pl",
		},
		location: "Gdynia",
		isActive: true,
		expiryDate: "2023-09-11",
	},
	{
		id: 15,
		category: "Dietetycy",
		dateAdded: "2023-08-01",
		title: "Dietetyk kliniczny",
		description:
			"Dołącz do naszego zespołu w klinice odchudzania w Katowicach. Wymagane doświadczenie i certyfikaty.",
		contractType: "Pełny etat",
		salary: {
			from: 7000,
			to: 9500,
			currency: "PLN",
			negotiable: false,
		},
		user: {
			username: "slimClinic",
			email: "rekrutacja@slimclinic.pl",
		},
		location: "Katowice",
		isActive: true,
		expiryDate: "2023-09-01",
	},
];
