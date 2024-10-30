const MascotaRepository = require('../Repositories/mascotasRepository');
const db = require('../database/conexion');

class mascotasServices {
  constructor() {
    this.MascotaRepository = new MascotaRepository(db);
    }
  
    obtenerMascotas() {
      return this.MascotaRepository.obtenerMascotas();
    }
  
    obtenerMascotasPorId(Id) {
      return this.MascotaRepository.obtenerMascotasPorId(Id);
    }
  
    crearMascotas(nuevoProducto) {
      return this.MascotaRepository.crearMascotas(nuevoProducto);
    }
  
    actualizarMascotas(Id, datosActualizados) {
      return this.MascotaRepository.actualizarMascotas(Id, datosActualizados);
    }
  
    eliminarMascotas(Id) {
      return this.MascotaRepository.eliminarMascotas(Id);
    }
  }
  
  module.exports = mascotasServices;
  