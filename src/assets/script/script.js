const ScriptScene1 = (decisions, nameScript) => {
  const { examinoPeriodicoDigital, tieneMochila } = decisions

  const scriptConversation = [
    {
      author: 'Alex',
      text: '¡Hola, mamá! ¿Cómo estás?'
    },
    {
      author: 'Madre',
      text: '¡Alex, cariño! Estoy bien. Pero he estado viendo las noticias, y estoy preocupada. ¿Todo está bien allí en Nueva Éireann?'
    },
    {
      author: 'Alex',
      text: '(intentando sonar tranquilo) Sí, mamá, todo está... un poco agitado. ¿Has estado viendo las noticias otra vez?'
    },
    {
      author: 'Madre',
      text: '(preocupada) Sí, las he estado siguiendo. Parece que el mundo entero está al borde de algo grande. ¿Estás seguro, hijo?'
    },
    {
      author: 'Alex',
      text: '(suspira) No estoy tan seguro de nada en este momento. Las tensiones entre la CAN y la UEA han llegado a un punto crítico. Estamos justo en medio de todo esto.'
    },
    {
      author: 'Madre',
      text: '(preocupada) ¡Oh, mi Dios! ¿Y tú estás a salvo?'
    },
    {
      author: 'Alex',
      text: 'Por ahora sí, pero... (dudando) Mamá, estoy preocupado. No sé qué hacer.'
    },
    {
      author: 'Madre',
      text: '(comprensiva) Cuéntame, hijo. Siempre encuentras una solución.'
    },
    {
      author: 'Alex',
      text: '(tratando de explicar) Hay algo sobre un recurso, el COV49, esencial para combatir patógenos. La competencia por su control ha desencadenado un conflicto global. La ciudad está en estado de emergencia.'
    },
    {
      author: 'Madre',
      text: '(pensativa) Entiendo. ¿Y qué estás pensando hacer?'
    },
    !examinoPeriodicoDigital &&
      {
        author: 'Alex',
        text: '(indeciso) No lo sé. Parece que las cosas se están poniendo feas. No tengo idea de qué va a pasar.'
      },
    examinoPeriodicoDigital &&
      {
        author: 'Alex',
        text: '(decidido) Estoy considerando buscar refugio en otro lugar junto a Sofia. Hay áreas marcadas en el mapa con mayor conflicto. Necesitamos estar a salvo.'
      },
    tieneMochila &&
      {
        author: 'ALex',
        text: 'Por cierto, mamá, he preparado una mochila con algunas cosas útiles. Solo quiero estar listo por si acaso.'
      },
    tieneMochila &&
      {
        author: 'Madre',
        text: 'Eso está bien, cariño. Prioriza tu seguridad. Te llamaremos pronto.'
      },
    !tieneMochila &&
      {
        author: 'Madre',
        text: ' Asegúrate de estar preparado, hijo. Mira a tu  alrededor y reúne algunas cosas esenciales.La familia estará rezando  por ti. ¡Llámame cuando puedas!'
      }
  ].filter(Boolean)

  const scriptNews = [
    {
      author: 'Noticiero',
      text: 'La tensión entre la CAN y la UEA ha llegado a su punto álgido. Las negociaciones han fracasado, y la guerra se ha desencadenado.'
    },
    {
      author: 'Noticiero',
      text: 'Ambas partes están decididas a pelear hasta el final. Los combates recientes han dejado a Nueva Éireann en un estado de emergencia.'
    },
    {
      author: 'Noticiero',
      text: 'Los recientes combates han dejado estragos en Nueva Éireann. Los hospitales están abrumados, la economía local está colapsando. Si está escuchando esto, busque refugio y prepárese para...'
    },
    {
      author: null,
      text: '(Conexión interrumpida)'
    }
  ].filter(Boolean)

  return {
    title: 'La Sala',
    content: nameScript === 'news' ? scriptNews : scriptConversation
  }
}

export const getSceneScript = (scene, decision, nameScript) => {
  switch (scene) {
    case 1:
      return ScriptScene1(decision, nameScript)
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
