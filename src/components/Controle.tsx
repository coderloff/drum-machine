interface Props{
    stop:any,
    name:any,
    power:any,
    volume:any,
    handleVolumeChange:any,
    changeSoundGroup:any
}
const Controle = ({ stop, name, power, volume, handleVolumeChange, changeSoundGroup }:Props) => {
  return (
    <div className="controle">
    <button onClick={stop}>Turn Power {power ? 'OFF' : 'ON'}</button>
    <h2>Volume: %{Math.round(volume * 100)}</h2>
    <input
      max="1"
      min="0"
      step='0.01'
      type="range"
      value={volume}
      className="slider"
      onChange={handleVolumeChange}
      />
    <h2 id="display" >{name}</h2>
    <button onClick={changeSoundGroup}>Change Sounds Group</button>
  </div>
  )
}

export default Controle