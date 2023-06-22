from django.urls import path
from .views import *

urlpatterns = [
    path('', principal, name="principal"),
    path('adopcion', adopcion, name="adopcion"),
    path('agregarproducto', agregarproducto, name="agregarproducto"),
    path('carrito1', carrito1, name="carrito1"),
    path('carrito2', carrito2, name="carrito2"),
    path('crearcuenta', crearcuenta, name="crearcuenta"),
    path('gatos', gatos, name="gatos"),
    path('iniciarsesion', iniciarsesion, name="iniciarsesion"),
    path('iniciarsesionadmi', iniciarsesionadmi, name="iniciarsesionadmi"),
    path('pagar', pagar, name="pagar"),
    path('perros', perros, name="perros"),
    path('principaladmi', principaladmi, name="principaladmi"),
    path('registroadpcion', registroadpcion, name="registroadpcion"),
    path('suscripcion', suscripcion, name="suscripcion"),
    path('suscripcionelegir', suscripcionelegir, name="suscripcionelegir"),
    path('suscripcionpagar', suscripcionpagar, name="suscripcionpagar"),
]