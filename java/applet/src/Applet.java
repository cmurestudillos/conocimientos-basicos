import java.awt.Graphics;
import java.applet.*;
/*** Applet.java
 * Created on 13 de marzo de 2008, 13:35
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor. ****/

/*** @author Carlos Mur ***/

public class Applet extends java.applet.Applet 
{
    String nombre;
    /*** Initialization method that will be called after the applet is loaded into the browser. ***/
    public void init() 
    {
    nombre=getParameter("vNombre");
    }
    
    public void paint(Graphics g) 
    {
        g.drawString("Hola "+nombre,25,25);
    }
    
}
