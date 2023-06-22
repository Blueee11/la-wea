from django.shortcuts import render

# Create your views here.

def principal(request):
    return render(request, 'Principal.html')

def adopcion(request):
    return render(request, 'Adopcion.html')

def agregarproducto(request):
    return render(request, 'AgregarProducto.html')

def carrito1(request):
    return render(request, 'Carrito1.html')

def carrito2(request):
    return render(request, 'Carrito2.html')

def crearcuenta(request):
    return render(request, 'CrearCuenta.html')

def gatos(request):
    return render(request, 'Gatos.html')

def iniciarsesion(request):
    return render(request, 'IniciarSesion.html')

def iniciarsesionadmi(request):
    return render(request, 'IniciarSesionAmi.html')

def pagar(request):
    return render(request, 'Pagar.html')

def perros(request):
    return render(request, 'Perros.html')

def principaladmi(request):
    return render(request, 'PrincipalAdmi.html')

def registroadpcion(request):
    return render(request, 'RegistroAdpcion.html')

def suscripcion(request):
    return render(request, 'Suscripcion.html')

def suscripcionelegir(request):
    return render(request, 'SuscripcionElegir.html')

def suscripcionpagar(request):
    return render(request, 'SuscripcionPagar.html')