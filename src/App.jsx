import { useState } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import { Box, Button, Card, CardContent, CardCover, Typography } from '@mui/joy';

function App() {
  const [count, setCount] = useState(0);
  const [showFlowers, setShowFlowers] = useState(false);

  const handleRain = () => {
    setShowFlowers(true);
    setTimeout(() => setShowFlowers(false), 10000); // Las flores desaparecen después de 5 segundos
  };

  return (
    <>
      <Box position="relative">
        <Typography
          textAlign="justify"
          marginX={1}
          marginTop={5}
          level="h1"
          textColor="34312D"
          variant="soft"
          color="warning"
        >
          Te amo demasiado, tesoro &lt;3
        </Typography>

        <Box marginX={1} marginTop={5}>
          <Card variant="soft" color="warning">
            <CardContent>
              <Typography level="h3">De: Mikel (lechi)</Typography>
              <Typography level="h3">Para: Ximena (mi futura esposa)</Typography>
            </CardContent>
          </Card>
        </Box>

        <Typography marginX={3} marginY={3}>
          Hola mi niña, FELIZ CUMPLEAÑOOOOS. Esta carta no es solo para desearte feliz cumpleaños, 
          sino para recordarte lo mucho que te amo y que, a pesar de la distancia, siempre estaré contigo. 
          Eres la persona más especial en mi vida y no hay nada que me haga más feliz que verte en fotos. 
          También quiero decirte que eres mi media mitad, mi niña, mi fan de Genshin y, sobre todo, mi futura esposa.
        </Typography>

        <Box marginX={1} marginTop={5}>
          <Card variant="soft" color="warning">
            <CardContent>
              <Typography level="h3">Te amo con todo mi corazón</Typography>
            </CardContent>
          </Card>
        </Box>

        <Typography marginY={3} marginX={3}>
          Amor, siempre me dices que nunca me enojo contigo, pero yo siempre me pregunto: 
          "¿Por qué enojarme con una niña tan linda?". Para mí, es imposible molestarme, porque desde el primer día 
          mi intención contigo fue amarte de manera incondicional. Y eso es algo que no necesita nada a cambio, 
          solo tu amor y tu compañía &lt;3.
        </Typography>

        <Box marginX={1} marginTop={5}>
          <Card variant="soft" color="warning">
            <CardContent>
              <Typography level="h3">Para ti, mi vida &lt;3</Typography>
            </CardContent>
          </Card>
        </Box>

        <Typography marginY={3} marginX={3}>
          Siempre me dices que no te gusta que gaste dinero en ti, aunque eso no lo vea como un gasto. 
          Desde el primer día llevo gastando en recargas de saldo, pero bueno, eso no es lo importante. 
          Lo importante es que me dijiste que no te regalara nada, pero yo sí te regalaré algo.
        </Typography>

        <Box marginX={1} marginTop={5}>
          <Card variant="soft" color="warning">
            <CardContent>
              <Typography level="h3"><center>Mi amor y flores</center></Typography>
              <Button onClick={handleRain} variant='soft' color='neutral'>Flores</Button>
            </CardContent>
          </Card>
        </Box>

        {/* Lluvia de flores */}
        {showFlowers && (
          <div className="flower-rain">
            {Array.from({ length: 15 }).map((_, i) => (
              <span key={i} className="flower">🌸</span>
            ))}
          </div>
        )}
        <Typography marginY={3} marginX={3} level='h4'>TE AMOOO, COMO PUEDO TENER UNA NOVIA TAN LINDA?</Typography>
        <Box marginX={1} marginTop={5}>
          <Card variant="soft" color="warning">
            <CardContent>
              <Typography level="h3"><center>Te amo mi amor, recuerda que este es tu dia pero para mi, todos los dias son para amarte &lt;3</center></Typography>
            </CardContent>
          </Card>
        </Box>

      </Box>
    </>
  );
}

export default App;
