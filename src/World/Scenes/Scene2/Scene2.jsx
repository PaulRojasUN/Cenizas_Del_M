
import  ChooseObjects  from './Places/ChooseObjects/ChooseObjects';
import  GameCircle  from './Places/GameCircle/GameCircle';
import  Bunker  from './Places/Bunker/Bunker';
import { useGameStore } from '../../../store/game';
const Scene2 = () => {
  const [place] = useGameStore((state) => [state.place]);

  return (
    <>
      {place === 'game' && <GameCircle/> }
      {place === 'chooseObjects' && <ChooseObjects />}
      {place === 'bunker' && <Bunker/> }
    </>
  );
};

export default Scene2;
