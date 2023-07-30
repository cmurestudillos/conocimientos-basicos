import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
import javax.swing.border.*;
import javax.swing.event.*;
import javax.swing.text.*;
/*
 * ventana.java
 *
 * Created on 28 de abril de 2008, 12:07
 *
 * To change this template, choose Tools | Template Manager
 * and open the template in the editor.
 */

/**
 *
 * @author Carlos
 */
public class ventana extends JFrame
{
    JTextPane mEtiqueta;
    JLabel mFirma,mCabecera,mTitulo;
    JButton mBoton[];
    JPanel panelPie,panelDerecha;
    JTabbedPane tbdPestana;
    JToolBar TBBarra;
    JScrollPane srcScroll;
    JScrollPane Ayuda;
    JTextArea mText;
    JTextField mField;
    JSplitPane splSplit;
    JSplitPane splSplit2;
    ImageIcon Image[];
    
    /** Creates a new instance of ventana */
    public ventana()
    {
        Font fPie=new Font("Verdana",Font.BOLD,8);
        Font fNormal=new Font("Verdana",Font.BOLD,10);
        Font fTitulo=new Font("Verdana",Font.BOLD,20);
        
        //Creacion y configuracion etiquetas.
        mFirma=new JLabel(" Aplicacion desarrollada en Java ");
        mFirma.setFont(fPie);
        mFirma.setBackground(Color.BLACK);
        mFirma.setOpaque(true);
        mFirma.setForeground(Color.GREEN);
        mTitulo=new JLabel(" Introduce un Texto: ");
        mTitulo.setFont(fTitulo);
        mTitulo.setOpaque(true);
        mTitulo.setForeground(Color.BLACK);
        
        //Creacion y Configuracion del TextPane 
        mEtiqueta=new JTextPane();
        mEtiqueta.setOpaque(true);
        mEtiqueta.setForeground(Color.BLACK);
 
        //ScrollPane de Ayuda.
        JScrollPane Ayuda=new JScrollPane(mEtiqueta);      
        Ayuda.setBorder(BorderFactory.createLineBorder(Color.BLACK));
        Ayuda.setOpaque(false);
         
        //Configuracion del TextArea.
        mText=new JTextArea("");
        mText.setLineWrap(true);
        mText.setColumns(26);
        mText.setRows(13);
        mText.setBorder(BorderFactory.createLineBorder(Color.BLACK));
        mText.setBackground(Color.WHITE);
        mText.setOpaque(true);
        
        //Configuracion del TextField
        mField=new JTextField(10);
        mField.setFont(fNormal);
        mField.setSize(90,10);
        mField.setColumns(20);
        
        //Panel para La Etiqueta.
        JPanel pEtiqueta=new JPanel();
        pEtiqueta.setLayout(new GridLayout(10,1));
        pEtiqueta.setLayout(new BoxLayout(pEtiqueta,BoxLayout.Y_AXIS));
        pEtiqueta.setBorder(BorderFactory.createLineBorder(Color.BLACK));
        
        //Panel de La caja de Texto.
        JPanel pText=new JPanel();
        pText.setBackground(Color.WHITE);
        pText.setLayout(new GridLayout(5,5));
        pText.setBorder(new EmptyBorder(10,10,10,10));
        
        //Panel para el TextField.
        JPanel pField=new JPanel();
        pField.setLayout(new GridLayout(3,2));
        pField.add(mTitulo);
        pField.add(mField);
        pField.setBorder(BorderFactory.createLineBorder(Color.BLACK));
        
        panelPie=new JPanel();
        panelPie.setLayout(new FlowLayout(FlowLayout.CENTER));
        panelPie.setBackground(Color.BLACK);
        panelPie.setOpaque(true);
        panelPie.add(mFirma);
        
        //ScrollPane.
        srcScroll=new JScrollPane(mText,JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED,JScrollPane.HORIZONTAL_SCROLLBAR_AS_NEEDED);
        
        //panel ToolBar
        TBBarra=new JToolBar();
        mBoton=new JButton[6];
        String BotonTitulo[]={"Anterior","Buscar","Siguiente","Insert","Reset","Cerrar"};
        ImageIcon imMas1=new ImageIcon(getClass().getResource("/button1.png"));
        ImageIcon imMas2=new ImageIcon(getClass().getResource("/button2.png"));
        ImageIcon imMas3=new ImageIcon(getClass().getResource("/button3.png"));
        ImageIcon imMas4=new ImageIcon(getClass().getResource("/insert.png"));
        ImageIcon imMas5=new ImageIcon(getClass().getResource("/reset.png"));
        ImageIcon imMas6=new ImageIcon(getClass().getResource("/cerrar.png"));
        ImageIcon Image[]={imMas1,imMas2,imMas3,imMas4,imMas5,imMas6};
        
        //SplitPane2.
        splSplit2=new JSplitPane(splSplit2.VERTICAL_SPLIT);
        splSplit2.setBackground(Color.WHITE);
        splSplit2.setBottomComponent(Ayuda);
        splSplit2.setTopComponent(pField);
        splSplit2.setDividerSize(7);
        splSplit2.setDividerLocation(80);
        
        //SplitPane.
        splSplit=new JSplitPane(splSplit.HORIZONTAL_SPLIT);
        splSplit.setBackground(Color.WHITE);
        splSplit.setLeftComponent(srcScroll);
        splSplit.setRightComponent(splSplit2);
        splSplit.setDividerSize(5);
        splSplit.setDividerLocation(430);

        //Oyentes de eventos de Raton.
        EventosRaton EV=new EventosRaton();
        
        for(int i=0;i<mBoton.length;i++)
        {
            mBoton[i]=new JButton(BotonTitulo[i],Image[i]);
            mBoton[i].setFont(fNormal);
            mBoton[i].setHorizontalTextPosition(SwingConstants.CENTER);
            mBoton[i].setVerticalTextPosition(SwingConstants.BOTTOM);
            TBBarra.add(mBoton[i],i);
            mBoton[i].addMouseListener(EV);
        }
        
        //jframe principal.
        setLayout(new BorderLayout());
        add(TBBarra,BorderLayout.NORTH);
        add(splSplit,BorderLayout.CENTER);
        add(panelPie,BorderLayout.SOUTH);
        
        //Hacer visible la interfaz grafica del JFrame(Hacer visible la ventana). 
        setSize(870,600);
        setLocation(150,150);
        setTitle(" Aplicaicion Swing ");
        setVisible(true);
        
        //asignacion de oyentes a los objetos.
        kill KillClosing=new kill();
        addWindowListener(KillClosing);
    }
//-------------------------------Clase para matar Procesos(Kill)-----------------------------------//
class kill extends WindowAdapter
    {
       public void windowClosing(WindowEvent e)
       {
        //mensaje de confirmacion o cancelacion de la Aplicaicion.
        int close=JOptionPane.showConfirmDialog(null," ¿Desea cerrar la aplicacion? ","A.F.",0);
           //cierra la aplicacion.
        if(close==0)
            {
           System.exit(0);
            }
       }
    }
//-------------------------------Clase para oyentes de eventos de Raton-----------------------------------//
class EventosRaton extends MouseInputAdapter
{   
       /** Creacion de un boton para cerrar la aplicacion */
       public void mouseReleased(MouseEvent e)
       {
        JButton aux=(JButton)e.getSource();
        String mensaje=mText.getText();
        //cierra la aplicacion.
        if(aux.getText()=="Cerrar")
            {
           System.exit(0);
            }
        //Muestra en el TextArea el Boton que hemos pulsado.
        else if(aux.getText()=="Anterior")
            {
                mensaje=aux.getText();
                String auxCadena=mText.getText();            
                mText.setText(auxCadena + "Se ha hecho click sobre " + mensaje +"\n");
            }
        //Muestra en el TextArea el Boton que hemos pulsado.
        else if(aux.getText()=="Siguiente")
            {
                mensaje=aux.getText();
                String auxCadena=mText.getText();            
                mText.setText(auxCadena + "Se ha hecho click sobre " + mensaje +"\n");
            }
        //Muestra en el TextArea el Boton que hemos pulsado.
        else if(aux.getText()=="Reset")
            {
                mensaje=aux.getText();
                String auxCadena=mText.getText();            
                mText.setText("");

            }
        //Insertar texto del TextField al TextArea.
        else if(aux.getText()=="Insert")
            {
                mensaje+=mField.getText();
                mText.setText(mensaje);

            }
        //Busca caracteres en el TextArea
        else if(aux.getText()=="Buscar")
               {
        String letra=JOptionPane.showInputDialog(null," Introduzca el caracter a buscar: ","Buscar Letra",2);
        String cadena=mText.getText();
        //recorrer el TextArea para encontrar la letra.
        int contador=0;
        for(int j=0;j<cadena.length();j++)
            {
             if(cadena.charAt(j)==letra.charAt(0))
                 contador++;
             }
        //presentar por mensaje el resultado.
         JOptionPane.showMessageDialog(null," Las coincidencias es: "+contador," Resultado ",1);
                }
        }
  /** Metodo para indicar las funciones que realizan los botones */
       public void mouseEntered(MouseEvent e)
       { 
            JButton aux=(JButton)e.getSource(); 
            String mensaje="";
            
            //Indica las propiedades y funciones del boton cerrar.
            if(aux.getText()=="Cerrar")
            {
                mensaje=aux.getText();
                String auxCadena=mText.getText();
                mEtiqueta.setText(" Estás sobre "+mensaje+".Al Presionar el Boton, la Aplicacion se cierra. ");
                mEtiqueta.setCaretPosition(0);
                mEtiqueta.insertIcon(aux.getIcon());
            }
            //Indica las propiedades y funciones del boton anterior.
            else if(aux.getText()=="Anterior")
            {
                mensaje=aux.getText();
                String auxCadena=mText.getText();            
                mEtiqueta.setText(" Estás sobre "+mensaje+".Al Presionar el Boton, muestra un texto. ");
                mEtiqueta.setCaretPosition(0);
                mEtiqueta.insertIcon(aux.getIcon());
            }
            //Indica las propiedades y funciones del boton Siguiente.
            else if(aux.getText()=="Siguiente")
            {
                mensaje=aux.getText();
                String auxCadena=mText.getText();            
                mEtiqueta.setText(" Estás sobre "+mensaje+".Al Presionar el Boton, muestra un texto. ");
                mEtiqueta.setCaretPosition(0);
                mEtiqueta.insertIcon(aux.getIcon());
            }
            //Indica las propiedades y funciones del boton reset.
            else if(aux.getText()=="Reset")
            {
                mensaje=aux.getText();
                String auxCadena=mText.getText();            
                mEtiqueta.setText(" Estás sobre "+mensaje+".Al Presionar el Boton, limpia la Pantalla. ");
                mEtiqueta.setCaretPosition(0);
                mEtiqueta.insertIcon(aux.getIcon());

            }
            //Indica las propiedades y funciones del boton Insert.
            else if(aux.getText()=="Insert")
            {
                mensaje=aux.getText();
                String auxCadena=mText.getText();
                mEtiqueta.setText(" Estás sobre "+mensaje+".Al Presionar el Boton, inserta un Texto. ");
                mEtiqueta.setCaretPosition(0);
                mEtiqueta.insertIcon(aux.getIcon());
            }
            //Indica las propiedades y funciones del boton Buscar.
            else if(aux.getText()=="Buscar")
            {
                mensaje=aux.getText();
                String auxCadena=mText.getText();

                mEtiqueta.setText(" Estás sobre "+mensaje+".Al Presionar el Boton, realiza una busqueda sobre el texto. ");
                mEtiqueta.setCaretPosition(0);
                mEtiqueta.insertIcon(aux.getIcon());
            }
       }
}
}
