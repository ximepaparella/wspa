<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the
 * installation. You don't have to use the web site, you can
 * copy this file to "wp-config.php" and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * MySQL settings
 * * Secret keys
 * * Database table prefix
 * * ABSPATH
 *
 * @link https://codex.wordpress.org/Editing_wp-config.php
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'c0db_blog_pv' );

/** MySQL database username */
define( 'DB_USER', 'c0blog_pv' );

/** MySQL database password */
define( 'DB_PASSWORD', '5swA4Pwk@Z' );

/** MySQL hostname */
define( 'DB_HOST', 'localhost' );

/** Database Charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8mb4' );

/** The Database Collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         'm#JD+h1L24|VOL`]8y0,ovJ$W|> 1~A@me?)h&1|U0N|9D`-2M/F:;`tVvC&Ky|%' );
define( 'SECURE_AUTH_KEY',  'h9I!Tah6 Q~f@%0<~r^2{fIcR_ nXuSR*JR/uK)xv+}ssfU8JLp)Qb4u(3US>m8#' );
define( 'LOGGED_IN_KEY',    ';vQSKP.%OJ1:N(2&hRcaUOp=D)R;7]5O*{Y0iFak$:~k:*>e3{_A7yg+^_PUeH -' );
define( 'NONCE_KEY',        '8jtr~p,7r$S8$G#{X%{RO::glFktB#?.C%i1wiF]}mb.*o(4j);f>qK;|hoqfx*K' );
define( 'AUTH_SALT',        '9@PRxJf+8ehk(^qh_I!zei#)Mdq[j]1GeRfLVGB)T%Q^}zI?@%5[H`g4W~yg(}Cd' );
define( 'SECURE_AUTH_SALT', 'orV1-^,2J>#!}Yt71_Kw4L&F@PNU9)z]R98Jg}MU{odB/:GUOIBv3z,X;&Qcn4+a' );
define( 'LOGGED_IN_SALT',   '8Da7YmVz3H`Q vOy(g}_X6#zVN66+k0%uZ*vF?rb<]h|[Zr-r~<ru/Flg*!0;g-E' );
define( 'NONCE_SALT',       ';p[ns*.Q;C~yk{iA,06Lu7zlr.7{zR|aDJ+kBluu43V!c Q#=JK~GqK}wnK]!}6d' );

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the Codex.
 *
 * @link https://codex.wordpress.org/Debugging_in_WordPress
 */
define( 'WP_DEBUG', false );

/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', dirname( __FILE__ ) . '/' );
}

/** Sets up WordPress vars and included files. */
require_once( ABSPATH . 'wp-settings.php' );
