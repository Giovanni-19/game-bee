const C3 = self.C3;
self.C3_GetObjectRefTable = function () {
	return [
		C3.Plugins.Sprite,
		C3.Behaviors.Sin,
		C3.Behaviors.Platform,
		C3.Behaviors.solid,
		C3.Plugins.Text,
		C3.Behaviors.Anchor,
		C3.Plugins.Keyboard,
		C3.Plugins.Mouse,
		C3.Plugins.Sprite.Cnds.OnCollision,
		C3.Plugins.Sprite.Acts.Destroy,
		C3.Plugins.Text.Acts.SetVisible,
		C3.Plugins.System.Acts.Wait,
		C3.Plugins.System.Acts.ResetGlobals,
		C3.Plugins.System.Acts.RestartLayout,
		C3.Plugins.Keyboard.Cnds.OnKey,
		C3.Plugins.Sprite.Acts.SetMirrored,
		C3.Plugins.System.Acts.AddVar,
		C3.Plugins.Text.Acts.SetText
	];
};
self.C3_JsPropNameTable = [
	{Senóide: 0},
	{coletavel: 0},
	{Plataforma: 0},
	{jogador: 0},
	{Senóide2: 0},
	{Sólido: 0},
	{inimigo: 0},
	{Limbo: 0},
	{plataforma_fixa1: 0},
	{plataforma_fixa2: 0},
	{plataforma_movel: 0},
	{pontos: 0},
	{Âncora: 0},
	{parabens: 0},
	{perdeu: 0},
	{Teclado: 0},
	{Mouse: 0},
	{Sprite: 0},
	{contagempontos: 0}
];

self.InstanceType = {
	coletavel: class extends self.ISpriteInstance {},
	jogador: class extends self.ISpriteInstance {},
	inimigo: class extends self.ISpriteInstance {},
	Limbo: class extends self.ISpriteInstance {},
	plataforma_fixa1: class extends self.ISpriteInstance {},
	plataforma_fixa2: class extends self.ISpriteInstance {},
	plataforma_movel: class extends self.ISpriteInstance {},
	pontos: class extends self.ITextInstance {},
	parabens: class extends self.ITextInstance {},
	perdeu: class extends self.ITextInstance {},
	Teclado: class extends self.IInstance {},
	Mouse: class extends self.IInstance {},
	Sprite: class extends self.ISpriteInstance {}
}