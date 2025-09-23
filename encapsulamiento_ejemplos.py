# encapsulamiento_ejemplos.py
# 10 ejemplos cortos de encapsulamiento (hecho simple)
# Archivo listo para subir a GitHub.

# 1) atributo "privado" con getters/setters simples
class Ej1:
    def __init__(self):
        self.__valor = 0  # privado
    def get_valor(self):
        return self.__valor
    def set_valor(self, v):
        self.__valor = v

# 2) name mangling (doble guion bajo)
class Ej2:
    def __init__(self):
        self.__secreto = "no lo mires"
    def mostrar(self):
        return self.__secreto

# 3) @property (getter y setter fáciles)
class Ej3:
    def __init__(self):
        self._x = 1
    @property
    def x(self):
        return self._x
    @x.setter
    def x(self, v):
        self._x = v

# 4) propiedad solo lectura (no setter)
class Ej4:
    def __init__(self):
        self._n = 42
    @property
    def n(self):
        return self._n  # read-only

# 5) protegido por convención y acceso desde subclase
class Ej5:
    def __init__(self):
        self._protegido = "uso interno"
class HijaEj5(Ej5):
    def ver(self):
        return self._protegido

# 6) encapsulado con closure (variable privada dentro de función)
def contador_factory():
    cuenta = 0
    def incrementar():
        nonlocal cuenta
        cuenta += 1
        return cuenta
    def ver():
        return cuenta
    return incrementar, ver

# 7) método privado (doble guion bajo)
class Ej7:
    def __init__(self):
        self.dato = "visible"
    def __metodo_privado(self):
        return "soy privado"
    def llamar_privado(self):
        return self.__metodo_privado()

# 8) validación en setter
class Ej8:
    def __init__(self):
        self._edad = 0
    @property
    def edad(self):
        return self._edad
    @edad.setter
    def edad(self, v):
        if v < 0:
            raise ValueError("edad no puede ser negativa")
        self._edad = v

# 9) variable "privada" de clase (compartida) con acceso controlado
class Ej9:
    __total = 0  # privado a nivel de clase
    def __init__(self):
        Ej9.__total += 1
    @classmethod
    def total(cls):
        return cls.__total

# 10) composición: un objeto "privado" dentro de otro
class Motor:
    def __init__(self, potencia):
        self.__pot = potencia
    def potencia(self):
        return self.__pot

class Coche:
    def __init__(self, pot):
        self.__motor = Motor(pot)  # motor privado
    def ver_potencia(self):
        return self.__motor.potencia()

# --- pruebas rápidas (muy simples) ---
if __name__ == "__main__":
    print("Ej1:", Ej1().get_valor())
    print("Ej2:", Ej2().mostrar())
    e3 = Ej3(); e3.x = 10; print("Ej3:", e3.x)
    print("Ej4:", Ej4().n)
    print("Ej5:", HijaEj5().ver())
    inc, ver = contador_factory(); inc(); inc(); print("Ej6:", ver())
    print("Ej7:", Ej7().llamar_privado())
    try:
        e8 = Ej8(); e8.edad = -1
    except ValueError as ex:
        print("Ej8: error capturado:", ex)
    a = Ej9(); b = Ej9(); print("Ej9 total:", Ej9.total())
    coche = Coche(120); print("Ej10 potencia:", coche.ver_potencia())
