import Key from "./Key";

interface Props {
  sounds: any[];
  play: (key: string, sound: string) => void;
  power: boolean;
  deactivateAudio: (audio: any) => void;
}

const Keyboard = ({ sounds, play, power, deactivateAudio }: Props) => {
  return (
    <div className="keyboard">
      {power
        ? sounds.map((sound: any) => (
            <Key sound={sound} play={play} deactivateAudio={deactivateAudio} />
          ))
        : sounds.map((sound: any) => (
            <Key
              sound={{ ...sound, url: "#" }}
              play={play}
              deactivateAudio={deactivateAudio}
            />
          ))}
    </div>
  );
};

export default Keyboard;
