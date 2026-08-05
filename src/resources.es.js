// Spanish text for the built-in resources, keyed by the id in resources.js.
//
// Only the words a client reads live here. Phone numbers, addresses, map
// coordinates, and the matching rules stay in resources.js so there is exactly
// one copy of the facts and no way for the two languages to drift apart.
//
// If an entry is missing here, the sheet falls back to English for that entry
// rather than printing nothing.
//
// NOT YET REVIEWED BY A NATIVE SPEAKER. See the note at the top of i18n.js.

export const RESOURCES_ES = {
  saminn: {
    what: 'Refugio para hombres, mujeres y familias, con tres comidas al día y un programa para ayudarle a volver a tener su propia vivienda.',
    hours: 'Llame para preguntar los horarios de admisión',
    say: 'Quisiera preguntar sobre quedarme aquí. ¿Puedo hacer una entrevista de admisión?',
    steps: [
      'Usted ya está aquí. Pídale a cualquier persona en la recepción que empiece una entrevista de admisión.',
      'Si no está aquí, llame al (972) 542-5302 y pregunte cuándo es la próxima hora de admisión.',
      'Llegue a tiempo a su entrevista. Lleve los papeles de la lista de abajo si los tiene.',
    ],
    bring: [
      'Identificación con foto si la tiene — venga de todos modos si no la tiene',
      'Tarjeta de Seguro Social si la tiene',
      'Nombres y fechas de nacimiento de todos los que se quedarán con usted',
      'Cualquier papel sobre el dinero que recibe',
    ],
    notes: 'No tener identificación no la descalifica. Venga y pregunte.',
  },

  'saminn-pantry': {
    what: 'Comida gratis. Usted pasa y escoge sus propios alimentos.',
    hours: 'mar, mié, jue 10:00 AM - 2:45 PM (cerrado de 1:00 a 1:30 PM). vie 9:00 AM - 1:45 PM',
    say: 'Vengo por la despensa de alimentos. Es mi primera vez.',
    steps: [
      'Vaya durante el horario abierto. Cierran de 1:00 a 1:30 PM para surtir, así que no llegue a esa hora.',
      'Regístrese en el escritorio y muestre su identificación y comprobante de domicilio. Una foto en su teléfono está bien.',
      'Pase y escoja sus propios alimentos.',
    ],
    bring: [
      'Identificación con foto',
      'Algo con su dirección — un contrato de renta o un bil',
      'Si no tiene dirección, venga de todos modos. No se lo piden a las personas sin hogar.',
      'Bolsas o un carrito si los tiene',
    ],
    notes: 'Atienden a McKinney, Anna, Celina, Princeton, Prosper, Melissa, Farmersville y pueblos cercanos.',
  },

  'cfp-mckinney': {
    what: 'Comida gratis y artículos de higiene personal. Está organizado como una tiendita para que usted escoja lo que su familia sí se va a comer.',
    hours: 'lun-mié 11:00 AM - 3:30 PM. jue 11:00 AM - 6:30 PM. vie 10:00 AM - 12:30 PM',
    say: 'Necesito comida para mi familia. ¿Qué tengo que hacer para poder pasar hoy?',
    steps: [
      'Vaya durante el horario abierto. El jueves están abiertos hasta las 6:30 PM si usted trabaja de día.',
      'Regístrese en la recepción y dígales que es su primera visita.',
      'Recorra los estantes y escoja lo que su familia realmente va a comer.',
    ],
    bring: ['Identificación con foto', 'Comprobante de domicilio si lo tiene', 'Bolsas si las tiene'],
    notes: '',
  },

  lifeline: {
    what: 'Despensa de alimentos y ayuda para pagar biles cuando no alcanza el dinero.',
    hours: 'mar y jue 8:30 - 11:30 AM y 1:00 - 2:30 PM',
    say: 'Necesito ayuda con comida y con un bil. ¿Me puede decir qué necesitan de mí?',
    steps: [
      'Llame primero al (972) 542-0020. Solo abren dos días a la semana.',
      'Pregunte exactamente qué papeles llevar para no tener que hacer un segundo viaje.',
      'Vaya durante el horario abierto, el martes o el jueves.',
    ],
    bring: ['Identificación con foto', 'El bil con el que necesita ayuda', 'Comprobante de ingresos si lo tiene'],
    notes: 'Suite 102 — la misma calle que la despensa del Samaritan Inn. Revise el número de suite para entrar por la puerta correcta.',
  },

  'hopes-door': {
    what: 'Ayuda gratuita y privada si alguien le está haciendo daño o le está dando miedo. Tienen una línea telefónica de 24 horas, refugio de emergencia, consejería y ayuda con la corte y las órdenes de protección.',
    address: 'La dirección del refugio se mantiene en secreto por seguridad. Llame primero a la línea de crisis.',
    phoneLabel: 'línea de 24 horas',
    altPhoneLabel: 'oficina de apoyo',
    hours: 'La línea contesta las 24 horas, todos los días',
    say: 'No estoy segura en mi casa y necesito hablar con alguien.',
    steps: [
      'Si está en peligro en este momento, llame primero al 911.',
      'Llame a la línea de 24 horas al (972) 276-0057. Use un teléfono que la otra persona no pueda revisar.',
      'No tiene que dar su nombre verdadero, y no tiene que decidir nada durante la llamada.',
      'Cuénteles lo que está pasando. Después pida lo que usted quiera: un plan de seguridad, un lugar en el refugio, o ayuda para conseguir una orden de protección.',
    ],
    bring: ['Nada. Solo necesita un teléfono.'],
    notes: 'No tiene que irse de su casa para recibir ayuda de ellos. Atienden a todo el condado de Collin.',
  },

  'natl-dv': {
    what: 'Gratis y privado. Alguien con quien hablar a cualquier hora, de día o de noche, en cualquier parte del país.',
    address: 'Solo por teléfono y chat en internet',
    hours: '24 horas al día, todos los días',
    say: 'Necesito hablar con alguien sobre lo que está pasando en mi casa.',
    steps: [
      'Llame al (800) 799-7233, o mande un mensaje de texto con la palabra START al 88788 si no es seguro hablar en voz alta.',
      'Dígales en qué estado está para que puedan encontrar ayuda cerca de usted.',
      'Pida un intérprete si prefiere hablar en español.',
    ],
    bring: ['Nada. Solo necesita un teléfono.'],
    notes: 'Borre el historial de llamadas y mensajes después, si alguien revisa su teléfono.',
  },

  lifepath: {
    what: 'Consejería, atención de salud mental y ayuda con las adicciones para el condado de Collin. Tienen un equipo de crisis que puede ir hasta donde usted está.',
    phoneLabel: 'línea de crisis de 24 horas',
    hours: 'La línea de crisis contesta las 24 horas. El horario de oficina varía — llame.',
    say: 'Necesito ver a alguien por mi salud mental. ¿Puedo hacer una cita?',
    steps: [
      'Llame al (877) 422-5939. Alguien contesta a cualquier hora del día o de la noche.',
      'Diga si es una emergencia en este momento, o si quiere una cita normal.',
      'Pregunte por la escala de pago según sus ingresos. Ayudan tenga o no tenga con qué pagar.',
      'Si no puede llegar hasta allá, pregunte por el equipo móvil de crisis que va hasta donde usted está.',
    ],
    bring: [
      'Identificación con foto',
      'Sus frascos de medicina, o una lista de lo que toma',
      'Tarjeta de Medicaid o de seguro médico si la tiene',
    ],
    notes: 'Esta es la oficina de salud mental del condado de Collin.',
  },

  'assistance-center': {
    what: 'Pueden pagar hasta tres meses de renta o de biles de servicios si usted pasa por un momento difícil.',
    phoneLabel: 'línea de asistencia',
    altPhoneLabel: 'oficina',
    hours: 'Llame de lun a jue, 9:00 AM - 3:00 PM',
    say: 'Estoy atrasada con la renta y vivo en el condado de Collin. ¿Puedo solicitar ayuda?',
    steps: [
      'Llame al (972) 422-1850 entre las 9:00 AM y las 3:00 PM, de lunes a jueves.',
      'No maneje hasta Plano primero. La solicitud empieza por teléfono.',
      'Conteste sus preguntas. Esa llamada telefónica ES la solicitud.',
      'Si pueden ayudarle, le darán una cita para ir a ver a un trabajador social.',
      'Lleve a esa cita todos los papeles de la lista de abajo.',
    ],
    bring: [
      'Identificación con foto',
      'El bil atrasado, o el aviso de desalojo',
      'Comprobante de que vive en el condado de Collin — un contrato de renta o un bil de servicios',
      'Comprobante de ingresos de todos los que viven en la casa',
    ],
    notes: 'Tiene que vivir en el condado de Collin para calificar.',
  },

  'salvation-army': {
    what: 'Comida, ropa y ayuda con la renta y los biles de servicios para familias de bajos ingresos.',
    hours: 'Llame para preguntar el horario',
    say: 'Necesito ayuda con comida y con mis biles. ¿Qué día debo ir y qué debo llevar?',
    steps: [
      'Llame primero al (972) 542-6694. No pudimos encontrar publicado su horario de asistencia.',
      'Pregunte qué día ir y exactamente qué papeles necesitan.',
      'Vaya el día que le digan.',
    ],
    bring: ['Identificación con foto', 'Los biles con los que necesita ayuda', 'Comprobante de ingresos'],
    notes: '',
  },

  'inn-style': {
    what: 'Ropa, muebles y cosas para la casa a bajo precio.',
    hours: 'mar-vie 9:00 AM - 5:00 PM',
    say: '¿Aceptan vales del Samaritan Inn?',
    steps: [
      'Primero pregúntele a su trabajador social del Samaritan Inn si puede recibir un vale.',
      'Vaya de martes a viernes, de 9:00 AM a 5:00 PM.',
      'Muestre su vale en la caja si se lo dieron.',
    ],
    bring: ['Su vale, si un trabajador social se lo dio'],
    notes: '',
  },

  'community-health-clinic': {
    what: 'Consultas médicas gratis para adultos y niños sin seguro. Chequeos, diabetes, asma, exámenes de la mujer, exámenes escolares y ayuda para conseguir medicinas.',
    hours: 'Llame para hacer una cita',
    say: 'No tengo seguro médico. ¿Califico para ser paciente aquí?',
    steps: [
      'Llame al (972) 547-0606 y pregunte si califica.',
      'Le preguntarán cuánto gana y dónde vive. Tiene que ser del norte del condado de Collin — no Plano, no Wylie.',
      'Si califica, haga una cita. No llegue sin cita.',
      'Pregunte por el programa de ayuda con recetas si el costo de las medicinas es un problema.',
    ],
    bring: [
      'Identificación con foto',
      'Comprobante de ingresos — talones de cheque o una carta de beneficios',
      'Una lista de todas las medicinas que toma',
    ],
    notes: 'Gratis para personas sin seguro por debajo del 200% del nivel federal de pobreza. Aquí no hay dentista.',
  },

  'fhc-virginia': {
    what: 'Una clínica completa con doctores, un dentista para adultos y niños, y consejeros, todo en un mismo edificio. Lo que usted paga depende de sus ingresos y del tamaño de su familia.',
    hours: 'lun-vie 7:45 AM - 12:00 PM y 1:00 PM - 4:45 PM. Cerrado los fines de semana.',
    say: 'Necesito ver a un dentista y no puedo pagar el precio completo. ¿Tienen escala de pago según ingresos?',
    steps: [
      'Llame al (214) 618-5600 y pregunte por la escala de pago según sus ingresos.',
      'Diga si necesita al doctor, al dentista o a un consejero.',
      'Pregunte qué papeles llevar para comprobar sus ingresos — eso es lo que fija su precio.',
      'El consultorio dental está en la Suite 103 cuando llegue.',
    ],
    bring: [
      'Identificación con foto',
      'Comprobante de ingresos de todos los que viven en su casa',
      'Tarjeta de seguro o de Medicaid si la tiene',
    ],
    notes: 'Este es el lugar principal en McKinney para trabajo dental de adultos — tapaduras, sacar muelas y dentaduras. La atienden con o sin seguro.',
  },

  'collin-dental-hygiene': {
    what: 'Limpiezas dentales, radiografías y cuidado de las encías a bajo costo, hechos por estudiantes con instructores supervisando. La primera visita de evaluación es gratis.',
    hours: 'lun-vie 8:00 AM - 5:00 PM',
    say: 'Quisiera hacer una cita de evaluación para la clínica de higiene dental.',
    steps: [
      'Llame al (972) 548-6537 y pida una cita de evaluación. La evaluación es gratis.',
      'Vaya a la evaluación. Ahí deciden si pueden aceptarla como paciente.',
      'Si la aceptan, le programarán su limpieza.',
      'Lleve efectivo o tarjeta de débito/crédito a la cita de limpieza. No aceptan cheques.',
    ],
    bring: ['Identificación con foto', 'Efectivo o tarjeta de débito/crédito para la visita de limpieza'],
    notes: 'IMPORTANTE: solo hacen limpiezas y cuidado de encías. NO hacen tapaduras, NO sacan muelas y NO hacen dentaduras. Si le duele una muela o la tiene rota, llame mejor a Family Health Center on Virginia.',
  },

  commongood: {
    what: 'Consultas médicas gratis, cuidado de la vista y salud mental para residentes del condado de Collin sin seguro. También ayudan a pagar sus recetas.',
    hours: 'lun-vie 8:30 AM - 5:00 PM. sáb 10:00 AM - 3:00 PM.',
    say: 'No tengo seguro y vivo en el condado de Collin. ¿Puedo ser paciente aquí?',
    steps: [
      'Llame al (469) 712-4246 y pregunte si califica.',
      'Le preguntarán sobre sus ingresos. Necesita estar en o por debajo del doble del nivel federal de pobreza.',
      'Pregunte por la ayuda para pagar sus medicinas — cubren parte o todo el costo.',
      'Abren los sábados por la mañana, lo cual ayuda si no puede faltar al trabajo entre semana.',
    ],
    bring: ['Identificación con foto', 'Comprobante de ingresos', 'Una lista de todas las medicinas que toma'],
    notes: 'Aquí no hay dentista, pero sí cubren cuidado de la vista y lentes. Antes se llamaba Hope Clinic of McKinney.',
  },

  'hrm-bridge': {
    what: 'Ayuda para reponer los papeles que necesita antes de que alguien más pueda ayudarle: acta de nacimiento, tarjeta de Seguro Social y licencia de manejar. También hacen identificaciones con foto temporales.',
    hours: 'Llame para preguntar el horario',
    say: 'Perdí mi identificación y necesito ayuda para reponerla. ¿Me pueden ayudar?',
    steps: [
      'Llame al (214) 501-2181 y diga qué papeles le faltan.',
      'Pregunte por la identificación con foto temporal si necesita algo que mostrar de inmediato.',
      'Ellos pueden ayudar a pagar las cuotas y llenar los formularios con usted.',
      'Empiece aquí primero si no tiene identificación. Casi todos los demás lugares de esta hoja se la van a pedir.',
    ],
    bring: [
      'Cualquier papel que todavía tenga, aunque esté vencido',
      'Lo que recuerde: su fecha de nacimiento, dónde nació, los nombres de sus padres',
    ],
    notes: 'Son la única agencia del condado de Collin que da una identificación con foto temporal. Recuperar sus papeles casi siempre abre la puerta a vivienda, beneficios y trabajo.',
  },

  'texas-free-id': {
    what: 'La ley de Texas dice que si usted no tiene hogar puede obtener una copia de su acta de nacimiento gratis, y una tarjeta de identificación de Texas sin pagar la cuota. Casi nunca se lo dicen a nadie.',
    address: 'Solicite en la oficina del county clerk o del registro civil local',
    hours: 'El 2-1-1 contesta las 24 horas del día',
    say: 'No tengo hogar y necesito una copia gratis de mi acta de nacimiento. ¿Dónde la solicito?',
    steps: [
      'Pídale a un trabajador social de aquí el formulario "Certification of Homeless Status" del DSHS de Texas. Se descarga gratis.',
      'Un empleado del refugio, de una escuela o de una agencia firma el formulario para confirmar su situación.',
      'Lleve el formulario firmado junto con su solicitud de acta de nacimiento al county clerk o al registro civil local. No le cobran la cuota.',
      'Cuando ya tenga el acta de nacimiento, solicite la tarjeta de identificación de Texas — esa cuota también se le perdona.',
      'Llame al 2-1-1 si necesita ayuda para encontrar la oficina más cercana.',
    ],
    bring: [
      'El formulario Certification of Homeless Status firmado',
      'Cualquier identificación o papel que todavía tenga',
    ],
    notes: 'Los jóvenes menores de 18 años pueden hacer esto sin que un padre firme ni se entere. Pídale ayuda al personal de aquí — para ellos firmar esto es algo normal.',
  },

  hsnt: {
    what: 'Atención médica general, cuidado del VIH, medicinas, consejería y ayuda con transporte a las citas. Le cobran según lo que usted pueda pagar.',
    hours: 'Llame para hacer una cita',
    say: 'Necesito un doctor y no puedo pagar el precio completo. ¿Tienen escala de pago según ingresos?',
    steps: [
      'Llame al (940) 381-1501, o al (800) 974-2437 si esa llamada le sale de larga distancia.',
      'Diga que vive en el condado de Collin y pida la escala de pago según sus ingresos.',
      'Pregunte por la ayuda con el transporte si llegar hasta Plano es un problema.',
      'Haga una cita antes de ir.',
    ],
    bring: ['Identificación con foto', 'Comprobante de ingresos', 'Una lista de sus medicinas'],
    notes: 'Aquí no hay dentista.',
  },

  'legal-aid': {
    what: 'Abogados gratis para personas que no pueden pagar uno. Desalojo, custodia de los hijos, órdenes de protección, beneficios que le quitaron y otros problemas que no son criminales.',
    phoneLabel: 'oficina de McKinney',
    altPhoneLabel: 'Legal Aid Line',
    hours: 'Llame para preguntar el horario de oficina y de las clínicas sin cita',
    say: 'Necesito ayuda legal gratis por un desalojo. ¿Califico, y cuándo es su próxima clínica?',
    steps: [
      'Llame a la Legal Aid Line al (888) 529-5277, o a la oficina de McKinney al (972) 542-9405.',
      'Diga de inmediato si ya tiene una fecha en la corte, y diga la fecha. Eso la sube en la lista.',
      'Dígales qué tipo de caso es y cuánto gana.',
      'Pregunte cuándo es la próxima clínica sin cita en la corte del condado de Collin.',
      'Lleve absolutamente todos los papeles que le hayan dado sobre su caso.',
    ],
    bring: [
      'Todos los papeles y avisos de la corte que haya recibido — hasta los que no entienda',
      'Su contrato de renta, si se trata de vivienda',
      'Identificación con foto',
      'Comprobante de ingresos',
    ],
    notes: 'No espere. Los plazos legales son cortos y perder uno le puede costar el caso.',
  },

  'meals-on-wheels': {
    what: 'Una comida caliente entregada en su casa todos los días entre semana si no puede salir con facilidad. También ayudan a las personas mayores a encontrar otros beneficios para los que califican.',
    hours: 'Comidas entregadas de lun a vie al mediodía',
    say: 'Quisiera saber si puedo recibir comidas en mi casa.',
    steps: [
      'Llame al (972) 562-6996 y pida una evaluación para ver si califica.',
      'Le preguntarán su edad y qué tan fácil le resulta salir de la casa.',
      'Si SÍ puede salir, pregunte mejor por el almuerzo en el McKinney Senior Recreation Center.',
      'Para ese almuerzo, apúntese antes llamando al (972) 547-7491. Sirven a las 11:00 AM entre semana.',
    ],
    bring: ['Nada para llamar. Tenga a la mano su dirección y su fecha de nacimiento.'],
    notes: 'Se sugiere una donación para personas de 60 años o más. Pregunte — a nadie se le niega la comida.',
  },

  'collin-transit': {
    what: 'Viajes compartidos a bajo costo al súper, al doctor, al centro para personas mayores y a otros lugares de la ciudad.',
    address: 'Los viajes se reservan por teléfono o con la aplicación GoPass',
    altPhoneLabel: 'para saber si califica',
    hours: 'Llame para preguntar el horario del servicio',
    say: 'Quiero inscribirme en Collin County Transit. ¿Califico?',
    steps: [
      'Llame PRIMERO al (469) 771-0667 para saber si califica y para inscribirse.',
      'No puede simplemente llegar a pedir un viaje. La inscripción tiene que hacerse antes del primer viaje.',
      'Ya inscrita, reserve sus viajes llamando al (214) 979-1111 o usando la aplicación GoPass.',
      'Reserve con un día de anticipación cuando pueda. Los viajes son compartidos, así que deje tiempo de sobra.',
    ],
    bring: ['Comprobante de edad, de discapacidad o de ingresos cuando se inscriba'],
    notes: 'Para personas de 65 años o más, personas con discapacidad, o personas de bajos ingresos que viven en McKinney, Celina, Lowry Crossing, Melissa, Princeton o Prosper.',
  },

  'city-house': {
    what: 'El único lugar del condado de Collin que da refugio a niños y jóvenes que están solos. Refugio de emergencia para edades de 0 a 22 años, vivienda para jóvenes adultos de 18 a 21, y comida, duchas, lavandería y pases de camión en su centro de recursos.',
    altPhoneLabel: 'después de las 5:00 PM',
    hours: 'Centro de recursos entre semana de 10:00 AM a 4:00 PM. El refugio tiene personal las 24 horas.',
    say: 'Tengo [su edad] años y no tengo un lugar seguro donde quedarme esta noche.',
    steps: [
      'Llame al (972) 424-4626 durante el día, o al (972) 971-0278 después de las 5:00 PM.',
      'Diga su edad de inmediato — eso decide cuál de sus programas le queda.',
      'Si trae hermanos o hermanas con usted, dígalo. Se esfuerzan mucho por mantener juntos a los hermanos.',
      'Pregunte por el Youth Resource Center para comida, una ducha, lavandería y pases de camión — entre semana de 10:00 AM a 4:00 PM.',
    ],
    bring: ['No necesita nada. Venga tal como está.'],
    notes: '',
  },

  veterans: {
    what: 'Ayuda gratis para solicitar los beneficios de veterano que usted se ganó — pagos por discapacidad, atención médica, pensión y beneficios para sobrevivientes.',
    hours: 'lun-vie 8:00 AM - 12:00 PM y de 1:00 PM en adelante',
    say: 'Soy veterano y quiero ayuda para solicitar mis beneficios.',
    steps: [
      'Llame al (972) 881-3060 para hacer una cita. Cierran para comer al mediodía.',
      'Pídales que revisen todos los beneficios para los que podría calificar, no solo por el que llamó.',
      'Lleve su papel de baja DD-214. Si no lo tiene, dígalo — ellos pueden pedir una copia por usted.',
      'Este servicio es gratis. Nunca le pague a nadie por presentar un reclamo ante el VA.',
    ],
    bring: [
      'Papel de baja DD-214 si lo tiene',
      'Identificación con foto',
      'Cualquier carta que haya recibido del VA',
      'Actas de matrimonio o de nacimiento si solicita beneficios familiares',
    ],
    notes: '',
  },

  'benefits-211': {
    what: 'Solicite SNAP (estampillas de comida), Medicaid, el seguro infantil CHIP y la ayuda en efectivo TANF.',
    address: 'Solicite por teléfono o en internet en YourTexasBenefits.com',
    altPhoneLabel: 'si el 211 no conecta',
    hours: '24 horas al día, todos los días',
    say: 'Quiero solicitar los beneficios de comida SNAP.',
    steps: [
      'Marque 2-1-1 desde cualquier teléfono. Escoja su idioma y luego oprima el 2.',
      'O solicite usted misma por internet en YourTexasBenefits.com.',
      'Tenga los papeles de abajo enfrente antes de llamar — le van a pedir los números.',
      'Pídale a un trabajador social de aquí que se siente con usted si el menú del teléfono la confunde. Es algo normal de pedir.',
    ],
    bring: [
      'Números de Seguro Social de todos los que solicitan',
      'Comprobante de ingresos — talones de cheque o una carta de beneficios',
      'Cuánto paga de renta y de servicios',
      'Identificación con foto',
    ],
    notes: 'Es gratis. Nadie debe cobrarle nunca por solicitar estos beneficios.',
  },
}
