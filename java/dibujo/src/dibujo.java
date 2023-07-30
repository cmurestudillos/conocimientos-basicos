import java.awt.Color;
import java.awt.Font;
import java.awt.Graphics;
import java.applet.Applet;
import java.awt.Image;
import java.net.*;
/*** dibujo.java - Creado on 14 de marzo de 2008, 9:23 ***/
/*** @author Carlos Mur ***/

public class dibujo extends java.applet.Applet 
{
    Image Img3;
    /**Metodo de Inicializacion del applet que sera invocado despues de que este se carge en el navegador. ***/
    String autor;
    public void init() 
    {
        //metodo get imagen de la clase applet
       Img3=getImage(getDocumentBase(),"pez.gif");
       autor=getParameter("autor");
    }
    public void paint(Graphics g)
    {
        //Crear un objeto c de la clase color.
        Color c=new Color(0);
        
        //Crear objetos de la clase fuente.
        Font fTitulo=new Font("Comic Sans",Font.BOLD,18);
        Font fNormal=new Font("Arial",Font.BOLD,12);
        
      //Dibujar un cuadrado.  
      g.setFont(fNormal);
      g.drawString("Cuadrado.",250,25);
      //g.drawLine(300,19,475,19);
      g.setColor(c.BLUE);
      //g.drawRect(350,100,80,80);
      g.draw3DRect(250,100,80,80,true);
      g.fill3DRect(250,100,80,80,true);
      g.setColor(c.BLUE);
      
       //Dibujar un circulo.
      g.setFont(fNormal);
      g.drawString("Circulo.",25,25);
      //g.drawLine(300,19,475,19);
      g.setColor(c.BLUE);
      g.drawOval(50,100,80,80);
      g.setColor(c.BLUE);
      
      //Dibujar un poligono.  
      g.setFont(fNormal);
      g.drawString("Poligono.",450,25);
      g.setColor(c.RED);
      int[]coordX={30,20,475};
      int[]coordY={20,30,20};
      g.drawPolygon(coordX,coordY,3);
      g.setColor(c.RED);
      
      //Dibujar una imagen.
      g.drawImage(Img3,850,80,this);
    }
}
