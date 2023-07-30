import java.awt.*;
import java.awt.event.*;
import javax.swing.*;
/*
 * ventana.java
 *
 * Created on 25 de abril de 2008, 12:50
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
    JLabel mEtiqueta,mFirma,mCabecera;
    JPanel panelCabecera,panelPie;
    JTabbedPane tbdPestana;
    JPanel panelPestana[];
    JScrollPane srcScroll;
    JSplitPane splSplit;
    JTextArea mText;
    
    /** Creates a new instance of ventana */
    public ventana()
    {
        Font fCabecera=new Font("Verdana",Font.BOLD,14);
        Font fPie=new Font("Verdana",Font.BOLD,8);
        
        //Creacion y configuracion etiquetas.
        mFirma=new JLabel(" Aplicacion en Java desarrollada por Carlos ");
        mFirma.setFont(fPie);
        mFirma.setBackground(Color.BLACK);
        mFirma.setOpaque(true);
        mFirma.setForeground(Color.GREEN);
        mCabecera=new JLabel(" Presentacion de Datos ");
        mCabecera.setFont(fCabecera);
        mCabecera.setBackground(Color.BLACK);
        mCabecera.setOpaque(true);
        mCabecera.setForeground(Color.GREEN);
        mEtiqueta=new JLabel(" Etiqueta");
        mEtiqueta.setOpaque(true);
        mEtiqueta.setForeground(Color.GREEN);
        
        //Configuracion del TextArea.
        mText=new JTextArea(" A balazos de plata y bombas de oro, rindió la plaza el moro. ");
        mText.setLineWrap(true);
        mText.setColumns(26);
        mText.setRows(13);
        mText.setBorder(BorderFactory.createLineBorder(Color.BLACK));
        mText.setBackground(Color.WHITE);
        mText.setOpaque(true);
        
        //ScrollPane.
        srcScroll=new JScrollPane(mText,JScrollPane.VERTICAL_SCROLLBAR_AS_NEEDED,JScrollPane.HORIZONTAL_SCROLLBAR_AS_NEEDED);
        
        //Panel para La Etiqueta.
        JPanel pEtiqueta=new JPanel();
        pEtiqueta.setLayout(new GridLayout(5,1));
        pEtiqueta.setLayout(new BoxLayout(pEtiqueta,BoxLayout.Y_AXIS));
        pEtiqueta.setBorder(BorderFactory.createLineBorder(Color.BLACK));
            
        //SplitPane.
        splSplit=new JSplitPane(splSplit.HORIZONTAL_SPLIT);
        //splSplit.setBackground(Color.WHITE);
        splSplit.setLeftComponent(srcScroll);
        splSplit.setRightComponent(pEtiqueta);
        splSplit.setDividerSize(5);
        splSplit.setDividerLocation(290);

        //Creacion del objeto JTabbedPane
        JTabbedPane tbdPestana=new JTabbedPane();
        
        //Creacion del Panel de Pestañas.
        panelPestana=new JPanel[2];
         
         //Creacion del bucle para las pestañas.
         for(int i=1;i<panelPestana.length;i++)
         {
           //Panel Pestañas
           panelPestana[i]=new JPanel();
           panelPestana[i].setLayout(new BorderLayout());
           panelPestana[i].add(splSplit);
           tbdPestana.addTab(" Ficha "+i,null,panelPestana[i]," Ayuda de la pestaña "+i);
         }
        
        //----------Disponer los elementos en capas----------//
        //Panel de Informacion.
        panelCabecera=new JPanel(new FlowLayout());
        panelCabecera.setBackground(Color.BLACK);
        panelCabecera.setOpaque(true);
        panelCabecera.add(mCabecera);
        panelPie=new JPanel();
        panelPie.setLayout(new FlowLayout(FlowLayout.RIGHT));
        panelPie.setBackground(Color.BLACK);
        panelPie.setOpaque(true);
        panelPie.add(mFirma);        
        
        //jframe principal.
        add(panelCabecera,BorderLayout.NORTH);
        add(tbdPestana,BorderLayout.CENTER);
        add(panelPie,BorderLayout.SOUTH);
        
        //Hacer visible la interfaz grafica del JFrame(Hacer visible la ventana).
        setSize(500,300);
        setLocation(250,250);
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
    
}
