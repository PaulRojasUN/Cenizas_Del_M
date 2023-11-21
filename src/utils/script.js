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
    }
  ]

  const scriptConversation2 = [
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

  if (nameScript === 'scriptFirstDialog') {
    return scriptFirstDialog
  } else if (nameScript === 'scriptConversation1') {
    return scriptConversation1
  } else if (nameScript === 'scriptConversation2') {
    return scriptConversation2
  } else if (nameScript === 'scriptNews') {
    return scriptNews
  }
}

const ScriptScene2 = (decisions, nameScript) => {
  const { hasFlashlight, hasKey, wantsToShare, hasCommunicator } = decisions

  const stringSharingResources = hasFlashlight && hasKey ? 'linterna y una llave' : hasFlashlight ? 'linterna' : 'llave'

  const scripMeetingSurvivors = [
    {
      author: '<strong>Alex</strong>',
      text: '(se acerca a un grupo de supervivientes que parecen solidarios. Se presenta y comparte información sobre su situación.) Hola, soy Alex. ¿Cómo están todos aquí? ¿Cómo han estado lidiando con toda esta situación?'
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

  // Se cierra al dialogo para presentar el selector de decisión al jugador

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

  // Dialogo antes de abrir la caja fuerte
  const scriptBeforeOpenSafe = [
    hasKey && !wantsToShare && {
      author: '<strong>Alex</strong>',
      text: '(comentando mentalmente) Creo que puedo abrir esto sin que nadie se dé cuenta'
    },
    hasKey && wantsToShare && {
      author: '<strong>Alex</strong>',
      text: 'Chicos, creo que con esta llave podemos tener  acceso a suministros importantes.'
    },
    hasKey && wantsToShare && {
      author: '<strong>Alex</strong>',
      text: '¿Qué les parece si abrimos la caja  juntos y compartimos lo que encontramos?.'
    }
  ].filter(Boolean)

  // Dialogo de justo despues de ver los recursos dentro de la caja fuerte
  const scriptViewingResourcesSafe = [
    hasKey && !wantsToShare && {
      author: '<strong>Alex</strong>',
      text: '(comentando mentalmente) Estas cosas me podrían ser de gran utilidad, pero no creo poder llevarlos todos'
    },
    hasKey && wantsToShare && {
      author: '<strong>Alex</strong>',
      text: 'Muy bien. La caja fuerte está repleta de recursos que nos serán de utilidad'
    },
    hasKey && wantsToShare && {
      author: '<strong>Alex</strong>',
      text: 'Podemos tomar cada uno y comenzarlos a distribuir equita...'
      // Se desata el caso de los demás supervivientes por tomar los recursos
    }
  ].filter(Boolean)

  // Dialogos despues de haber visualizado los recursos disponibles en la caja fuerte (cuando estos son sacados ya sea por Alex o los demas supervivientes)
  const scriptAfterOpenSafe = [
    hasKey && !wantsToShare && {
      author: '<strong>Alex</strong>',
      text: '(recoge elementos escogidos)'
    },
    hasKey && !wantsToShare && hasCommunicator && {
      author: '<strong>Alex</strong>',
      text: '(comentando mentalmente) Creo saber cómo usar este comunicador...'
    },
    hasKey && !wantsToShare && hasCommunicator && {
      author: '<strong>Comunicador</strong>',
      text: '...ubicado en las coordenadas 34.567, -78.901.'
    },
    hasKey && !wantsToShare && hasCommunicator && {
      author: '<strong>Comunicador</strong>',
      text: 'Alex, si estás ahí, espero que  escuches esto.'
    },
    hasKey && !wantsToShare && hasCommunicator && {
      author: '<strong>Comunicador</strong>',
      text: 'Necesitamos refuerzos y recursos.'
    },
    hasKey && !wantsToShare && hasCommunicator && {
      author: '<strong>Comunicador</strong>',
      text: 'Si hay alguien escuchando, respondan.'
    },
    hasKey && wantsToShare && {
      author: '<strong>Alex</strong>',
      text: '(comentando mentalmente) Los demás enloquecieron por tomar cosas de la caja fuerte...'
    },
    hasKey && wantsToShare && {
      author: '<strong>Alex</strong>',
      text: '(comentando mentalmente) Parece que yo no podré tomar nada de allí...'
    },
    hasKey && wantsToShare && {
      author: '<strong>Alex</strong>',
      text: '(comentando mentalmente) Será mejor que me retire de este lugar...'
    }
  ].filter(Boolean)

  // Dialogo despues de encontrar el botiquin en el bunker
  const scriptPickingAid = [
    {
      author: '<strong>Alex</strong>',
      text: 'Puedo llevarme esto conmigo'
    }
  ].filter(Boolean)

  const scriptDiscoverTreason = [
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
      text: 'Tranquilos muchachos, lo resolveremos y buscaremos al culpable, por ahora preocupemosnos por abrir la caja fuerte.'
    }
  ].filter(Boolean)
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

export const getSceneScript = (scene, decisions, nameScript) => {
  switch (scene) {
    case 0:
      return ScriptIntroduction()
    case 1:
      return ScriptScene1(decisions, nameScript)
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
