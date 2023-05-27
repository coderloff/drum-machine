import { useEffect } from "react";

interface Props {
  play: (key:string, id:string)=>void;
  deactivateAudio: (audio:any)=>void;
  sound: { id: string; key: string; url: string; keyCode: string };
}

const Key = ({ play, deactivateAudio, sound }: Props) => {
  const handleKeydown = (e: any) => {
    if (sound.keyCode === e.keyCode) {
      const audio = document.getElementById(sound.key);
      play(sound.key, sound.id);
      deactivateAudio(audio);
    }
  };

  useEffect(() => {
    document.addEventListener("keydown", handleKeydown);
  }, []);

  return (
    <button
      value="test"
      id={sound.keyCode}
      className="drum-pad"
      onClick={() => play(sound.key, sound.id)}
    >
      <audio className="clip" src={sound.url} id={sound.key} />
      {sound.key}
    </button>
  );
};

export default Key;
