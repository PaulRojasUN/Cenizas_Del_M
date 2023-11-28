const ScriptScene1 = (decisions, nameScript) => {
  const { examinoPeriodicoDigital, tieneMochila, sonarTranquilo } = decisions

  const scriptFirstDialog = [
    {
      author: '<strong>Alex</strong>',
      text: 'Hace mucho que no llamo a mi madre. Aunque primero debería revisar un poco'
    }
  ]

  const scriptConversation1 = [
    {
      author: '<strong>Alex</strong>',
      text: '¡Hola, mamá! ¿Cómo estás?'
    },
    {
      author: '<strong>Madre</strong>',
      text: '¡Alex, cariño! Estoy bien. Pero he estado viendo las noticias, y estoy preocupada. ¿Todo está bien allí en <strong>Nueva Éireann?</strong>'
    },
    sonarTranquilo && {
      author: '<strong>Alex</strong>',
      text: '(intentando sonar tranquilo) Sí, mamá, todo está... un poco agitado. ¿Has estado viendo las noticias otra vez?'
    },
    !sonarTranquilo && {
      author: '<strong>Alex</strong>',
      text: '(agitado) No. Esa cuestión me tiene bastante preocupado. ¿Te enteraste en las noticias?'
    },
    {
      author: '<strong>Madre</strong>',
      text: '(preocupada) Sí, las he estado siguiendo. Parece que el mundo entero está al borde de algo grande. ¿Estás seguro, hijo?'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(suspira) No estoy tan seguro de nada en este momento. Las tensiones entre la CAN y la UEA han llegado a un punto crítico. Estamos justo en medio de todo esto.'
    },
    {
      author: '<strong>Madre</strong>',
      text: '(preocupada) ¡Oh, mi Dios! ¿Y tú estás a salvo?'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'Por ahora sí, pero... (dudando) Mamá, estoy preocupado. No sé qué hacer.'
    },
    {
      author: '<strong>Madre</strong>',
      text: '(comprensiva) Cuéntame, hijo. Siempre encuentras una solución.'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(tratando de explicar) Hay algo sobre un recurso, el COV49, esencial para combatir patógenos. La competencia por su control ha desencadenado un conflicto global. La ciudad está en estado de emergencia.'
    },
    {
      author: '<strong>Madre</strong>',
      text: '(pensativa) Entiendo. ¿Y qué estás pensando hacer?'
    },
    !examinoPeriodicoDigital &&
    {
      author: '<strong>Alex</strong>',
      text: '(indeciso) No lo sé. Parece que las cosas se están poniendo feas. No tengo idea de qué va a pasar.'
    },
    examinoPeriodicoDigital &&
    {
      author: '<strong>Alex</strong>',
      text: '(decidido) Estoy considerando buscar refugio en otro lugar junto a Sofia. Hay áreas marcadas en el mapa con mayor conflicto. Necesitamos estar a salvo.'
    },
    tieneMochila &&
    {
      author: '<strong>ALex</strong>',
      text: 'Por cierto, mamá, he preparado una mochila con algunas cosas útiles. Solo quiero estar listo por si acaso.'
    },
    tieneMochila &&
    {
      author: '<strong>Madre</strong>',
      text: 'Eso está bien, cariño. Prioriza tu seguridad. Te llamaremos pronto.'
    },
    !tieneMochila &&
    {
      author: '<strong>Madre</strong>',
      text: ' Asegúrate de estar preparado, hijo. Mira a tu  alrededor y reúne algunas cosas esenciales.La familia estará rezando  por ti. ¡Llámame cuando puedas!'
    }
  ].filter(Boolean)

  const scriptNews = [
    {
      author: '<strong>Noticiero</strong>',
      text: 'La tensión entre la CAN y la UEA ha llegado a su punto álgido. Las negociaciones han fracasado, y la guerra se ha desencadenado.'
    },
    {
      author: '<strong>Noticiero</strong>',
      text: 'Ambas partes están decididas a pelear hasta el final. Los combates recientes han dejado a Nueva Éireann en un estado de emergencia.'
    },
    {
      author: '<strong>Noticiero</strong>',
      text: 'Los recientes combates han dejado estragos en Nueva Éireann. Los hospitales están abrumados, la economía local está colapsando. Si está escuchando esto, busque refugio y prepárese para...'
    },
    {
      author: '<strong>Noticiero</strong>',
      text: '(Conexión interrumpida)',
    },
    {
      author: '<strong>Alex</strong>',
      text: 'Esa multitud parece ir a un lugar seguro, parece un bunker. ¿Debería seguir con ellos y buscar refugio, o intentar ir a donde mi novia?',
      choice: true
    }
  ].filter(Boolean)

  const scriptGoToBunker = [
    {
      author: '<strong>Alex</strong>',
      text: 'Sí, será mejor buscar refugio. No puedo arriesgarme a ir a otro lugar.'
    }
  ]

  const scriptGoToSofia = [
    {
      author: '<strong>Alex</strong>',
      text: 'Sí, iré a buscar a Sofia. Ella es lo más importante para mí.'
    },
    {
      author: '<strong>...</strong>',
      text: '[Los edificios colapsaron enfrente tuyo, la calle se llenó de escombros y no te dejaron seguir. Aún así, encontraste una llave en el suelo que puede ser de utilidad]'
    },
    {
      author: '<strong>...</strong>',
      text: '[Aunque tu objetivo sigue siendo encontrar a Sofia, la destrucción a tu alrededor te obliga a reconsiderar. El único lugar seguro parece ser el bunker al que todos corren]'
    },
    {
      author: '<strong>Alex</strong>',
      text: '¡Maldición! No puedo llegar a Sofia. Tendré que buscar refugio en el bunker.'
    }
  ]

  const warningsSala = [
    {
      author: '<strong>Alex</strong>',
      text: 'Necesitaría algo para llevar este objeto'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'No puedo irme sin la mochila'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'No puedo irme sin llamar a mi madre'
    }
  ]

  const scripts = {
    scriptFirstDialog,
    scriptConversation1,
    scriptNews,
    scriptGoToBunker,
    scriptGoToSofia,
    warningsSala
  };

  return scripts[nameScript];
}

const ScriptScene2 = (decisions, nameScript, auxiliary) => {
  const { hasFlashlight, hasKey, wantsToShare, hasCommunicator, hasMedkit } = decisions

  const stringSharingResources = hasFlashlight && hasKey ? 'linterna y una llave' : hasFlashlight ? 'linterna' : 'llave'

  const scripMeetingSurvivors = [
    {
      author: '<strong> ... </strong>',
      text: 'Alex se acerca a un grupo de supervivientes que parecen solidarios.'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'Hola, soy Alex. ¿Cómo están todos aquí? ¿Cómo han estado lidiando con toda esta situación?'
    },
    {
      author: '<strong>Superviviente A</strong>',
      text: '(sonriendo) ¡Hola, Alex! Bienvenido al búnker. Estamos todos pasando por lo mismo, ¿verdad chicos?'
    },
    {
      author: '<strong>Superviviente B</strong>',
      text: '(asiente) Sí, es un desastre afuera. Pero al menos aquí abajo, tenemos una oportunidad.'
    },
    {
      author: '<strong>Superviviente C</strong>',
      text: 'Perdí contacto con mi familia en los primeros días. No sé si están bien.'
    },
    {
      author: '<strong>Superviviente D</strong>',
      text: '(serio) Todos hemos perdido algo. Pero ahora estamos aquí, y tenemos que cuidarnos mutuamente.'
    },
    {
      author: '<strong>Superviviente A</strong>',
      text: 'Eso es cierto, lo mejor que podemos hacer ahora es reunir las cosas que tenemos y mantener una gestión equitativa de todo.'
    },
    {
      author: '<strong>Superviviente A</strong>',
      text: 'Veo que tienes una mochila, ¿hay algo útil que nos pueda servir a todos?'
    }
  ]

  const scriptAnsweringSurvivorsResources = [
    !hasFlashlight && !hasKey &&
    {
      author: '<strong>Alex</strong>',
      text: 'No, no tengo nada en mi mochila'
    },
    (hasFlashlight || hasKey) && !wantsToShare &&
    {
      author: '<strong>Alex</strong>',
      text: '(mintiendo) No, no tengo nada en mi mochila'
    },
    (hasFlashlight || hasKey) && wantsToShare &&
    {
      author: '<strong>Alex</strong>',
      text: 'Sí, tengo una ' + stringSharingResources
    },
    ((!hasFlashlight && !hasKey) || !wantsToShare) &&
    {
      author: '<strong>Superviviente A</strong>',
      text: '(desconfiado) Mmm, ya veo'
    },
    ((hasFlashlight || hasKey) || wantsToShare) &&
    {
      author: '<strong>Superviviente A</strong>',
      text: 'Bien, nos será de ayuda'
    }
  ].filter(Boolean)


  const scriptTraitorFound = [
    {
      author: '<strong>Alex</strong>',
      text: 'Hemos estado perdiendo suministros últimamente. ¿Alguien tiene alguna idea de lo que está sucediendo?'
    },
    {
      author: '<strong>Superviviente E</strong>',
      text: '¡No puedo creer que alguien de nosotros estaría haciendo esto! ¡Estamos juntos en esto!'
    },
    {
      author: '<strong>Superviviente A</strong>',
      text: 'Tranquilos muchachos, lo resolveremos y buscaremos al culpable.'
    }
  ]
  

    // Do not want to share the key

    const scriptTraitorFoundConclusionAloneKey = [
      {
        author: '<strong> ... </strong>',
        text: 'Todos, incluyendo a Alex, se alejan por la tensión de la discusión'
      },
      {
        author: '<strong>Alex</strong>',
        text: '(pensamiento) No puede ser, ahora, con menos recursos la convivencia y supervivencia en el bunker será más complicada'
      },
      {
        author: '<strong> ... </strong>',
        text: 'Alex se acerca a la caja fuerte del bunker'
      },
      {
        author: '<strong>Alex</strong>',
        text: '(pensamiento) Esta caja fuerte debería estar llena de recursos pero está protegida con un candado y ninguno sabe dónde está la llave'
      },
      {
        author: '<strong> ... </strong>',
        text: '[Alex recuerda algo]'
      },
      {
        author: '<strong>Alex</strong>',
        text: '(pensamiento) La llave que encontré... parece coincidir con la forma de la ranura del candado'
      },
      {
        author: '<strong>Alex</strong>',
        text: '(pensamiento) Creo que puedo abrirla sin que nadie se dé cuenta'
      },
      {
        author: '<strong> ... </strong>',
        text: 'Alex abre la caja fuerte silenciosamente'
      },
      {
        author: '<strong>Alex</strong>',
        text: '(pensamiento) Estas cosas me podrían ser de gran utilidad, pero no creo poder llevarlos todos'
      },
      
    ]

    const scriptViewPickedResourcesAloneKey = [
      {
        author: '<strong> ... </strong>',
        text: '[Alex toma los elementos escogidos]'
      },
      hasCommunicator && {
        author: '<strong>Alex</strong>',
        text: '(comentando mentalmente) Creo saber cómo usar este comunicador...'
      },
      hasCommunicator && {
        author: '<strong>Comunicador</strong>',
        text: '...ubicado en las coordenadas 34.567, -78.901.'
      },
      hasCommunicator && {
        author: '<strong>Comunicador</strong>',
        text: 'Alex, si estás ahí, espero que  escuches esto.'
      },
      hasCommunicator && {
        author: '<strong>Comunicador</strong>',
        text: 'Necesitamos refuerzos y recursos.'
      },
      hasCommunicator && {
        author: '<strong>Comunicador</strong>',
        text: 'Si hay alguien escuchando, respondan.'
      },
      hasCommunicator && {
        author: '<strong>Alex</strong>',
        text: 'Sofía...'
      },
      hasCommunicator && {
        author: '<strong>Alex</strong>',
        text: 'Debo ir a buscarla; me iré de este lugar'
      },
      !hasCommunicator && {
        author: '<strong>Alex</strong>',
        text: 'Será mejor que me retiré antes de que alguien me descubra'
      },
      !hasMedkit && {
        author: '<strong>Alex</strong>',
        text: '(pensamiento) Me llevaré este botiquín'
      },
      !hasMedkit && {
        author: '<strong> ... </strong>',
        text: '[Alex toma el botiquín...]'
      },
      {
        author: '<strong> ... </strong>',
        text: '[Alex se retirá del bunker con esperanzas de hallar mejores oportunidades fuera del bunker]'
      }
    ].filter(Boolean)
  


    // Wants to share the key

    const scriptTraitorFoundConclusionGroup = [{
      author: '<strong>Superviviente B</strong>',
      text: 'Sí, pero nuestros recursos ya son muy escasos; a duras penas tenemos suficientes para el resto del día de hoy'
    },
    {
      author: '<strong>Superviviente E</strong>',
      text: 'Intentemos abrir la caja fuerte'
    },
    {
      author: '<strong>Superviviente B</strong>',
      text: '¿Hay una caja fuerte?'
    },
    {
      author: '<strong>Superviviente E</strong>',
      text: 'Sí, pero, está protegida por un candado y no sabemos dónde está la llave'
    },
    {
      author: '<strong>Superviviente A</strong>',
      text: 'Alex encontró una llave. Quizá coincida con la del candado'
    },
    {
      author: '<strong>Superviviente E</strong>',
      text: 'Tendremos que probarla'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'De acuerdo'
    },
  ]

  const scriptViewResourcesGroup = [
    {
      author: '<strong>Alex</strong>',
      text: 'Intentaré insertar la llave en la caja fuerte'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'Creo que coincide... la caja fuerte acaba de desbloquearse. La abriré.'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(abriendo la caja fuerte) Muy bien. La caja fuerte está repleta de recursos que nos serán de utilidad'
    },
    {
      author: '<strong>Alex</strong>',
      text: 'Podemos tomar cada uno y comenzarlos a distribuir equita...'
    },
    {
      author: '<strong>...</strong>',
      text: '[Se arma un caos por todos intentando tomar los recursos de la caja fuerte]'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(pensamiento) No lo puedo creer. Todos enloquecieron y  comenzaron a pelearse por los recursos para ellos mismos. Qué desastre.'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(pensamiento) ... y no logré tomar nada de ahí'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(pensamiento) Supongo que no tiene sentido continuar aquí si no hay recursos. Me retiraré.'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(pensamiento) Debería llevarme el botiquín de primeros auxilios del bunker mientras todos están distraidos'
    },
    {
      author: '<strong> ...</strong>',
      text: 'Alex toma el botiquín y se marcha del bunker con esperanzas de hallar mejores oportunidades fuera de este'
    },
  ]


  // Do not have the key

  const scriptTraitorFoundConclusionAloneNoKey = [
    {
      author: '<strong> ... </strong>',
      text: 'Todos, incluyendo a Alex, se alejan por la tensión de la discusión'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(pensamiento) No puede ser, ahora, con menos recursos la convivencia y supervivencia en el bunker será más complicada'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(pensamiento) Esto no parece tener futuro... me iré de aquí'
    },
    {
      author: '<strong>Alex</strong>',
      text: '(pensamiento) Me llevaré el botiquín de primeros auxilios del bunker discretamente. Me podría ser útil'
    },
    {
      author: '<strong> ... </strong>',
      text: '[Alex toma el botiquín...]'
    },
    {
      author: '<strong> ... </strong>',
      text: '[Alex se retirá del bunker con esperanzas de hallar mejores oportunidades fuera de este]'
    }
  ]


  // Esto sucede inmediamente despues de que Alex se presente a los demás supervivientes
  // Despues de los 15 dias sucede el evento con el traidor
  const scriptDays = [
    {
      author: '<strong> ... </strong>',
      text: '15 días después'
    }
  ] 

  const scriptCircleGameInit = [
    {
      author: '<strong>Alex</strong>',
      text: 'Vale, vamos a ver.... Necesito abrir la caja fuerte. Pero, ¿como funciona este minijuego?'
    },
    {
      author: '<strong>...</strong>',
      text: 'El juego es simple, tienes que dar a la tecla <strong>ENTER</strong> cuando la flecha este apuntando a un circulo remarcado'
    },
    {
      author: '<strong>...</strong>',
      text: 'Pero recuerda, tienes solamente 3 vidas... ¡No las pierdas!'
    }
  ]

  const scriptCircleGameLives = [
    {
      author: '<strong>...</strong>',
      text: '¡Oh no! ¡Perdiste una vida!. Te quedan ' + auxiliary.lives + ' vidas'
    }
  ]

  const scriptCircleGameWin = [
    {
      author: '<strong>...</strong>',
      text: '¡Felicidades! ¡Ganaste! Veamos que pasara con tu destino...'
    }
  ]

  const scriptCircleGameLose = [
    {
      author: '<strong>...</strong>',
      text: '¡Oh no! ¡Perdiste! Veamos que pasara con tu destino...'
    }
  ]


  const scripts = {
    scripMeetingSurvivors,
    scriptAnsweringSurvivorsResources,
    scriptTraitorFound,
    scriptTraitorFoundConclusionAloneKey,
    scriptViewPickedResourcesAloneKey,
    scriptTraitorFoundConclusionGroup,
    scriptViewResourcesGroup,
    scriptTraitorFoundConclusionAloneNoKey,
    scriptDays,
    scriptCircleGameInit,
    scriptCircleGameLives,
    scriptCircleGameWin,
    scriptCircleGameLose
  };

  return scripts[nameScript];
}


const ScriptIntroduction = () => {
  const script = [
    {
      text: 'Bienvenido a Nueva Éireann, año 2045. La tecnología ha catapultado la civilización a nuevas alturas, pero no todo es lo que parece.'
    },
    {
      text: 'El mundo está al borde. Dos gigantes, la Coalición de América del Norte y la Unión Euroasiática, se enfrentan en un juego peligroso de poder. Las ganas de poseer algo que se encontro en el Artico'
    },
    {
      text: 'Un recurso vital, el COV49, esencial para combatir patógenos mortales. La competencia por su control ha desencadenado un conflicto global.'
    },
    {
      text: 'Lo que inició como una disputa territorial ha evolucionado hacia una inminente guerra a gran escala. La tensión es palpable, y cada decisión puede llevar al mundo al abismo.'
    }
  ]

  return script
}

export const getSceneScript = (scene, decisions, nameScript, auxiliary)=> {
  switch (scene) {
    case 0:
      return ScriptIntroduction()
    case 1:
      return ScriptScene1(decisions, nameScript)
    case 2:
      return ScriptScene2(decisions, nameScript,auxiliary)
    default:
      return {}
  }
}

// const decisions = {
//   examinoPeriodicoDigital: true,
//   tieneMochila: false
// }
//
// const guion = getSceneScript(1, decisions)
// console.log(guion)
